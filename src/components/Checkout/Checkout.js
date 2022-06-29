import { db, collectionsName } from '../../services/firebase/index'
import { getDocs,collection,documentId,where,query,writeBatch,addDoc } from "firebase/firestore"
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import Form from '../Form/From';
import {swalSuccess,swalError} from  '../../messages/messages'
import {useCartContext} from '../../context/CartContext';


const Checkout = ()  =>{
    const {cartList, totalPrice,clearCart} = useCartContext()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [dataForm,setDataForm] = useState({
        name:'',
        email:'',
        phone:''
    })
    let today = new Date()

    const createOrder = () => {

        setLoading(true)

        const order = {
            buyer: dataForm,
            items: cartList,
            total: totalPrice(),
            date: today,
            state: "generada"
        }

        const idsCartItems = cartList.map(item => item.id)
        const batch = writeBatch(db)
        let thereIsStock = true
        const itemsRef = collection(db,collectionsName.items)

        getDocs(query(itemsRef, where(documentId(), 'in', idsCartItems)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cartList.find(prod => prod.id === doc.id)?.cantidad

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        thereIsStock = false
                    }
                })
            })
            .then(() => {
                if(thereIsStock) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, order)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: thereIsStock})
                }
            })
            .then(({ id }) => {
                batch.commit()    
                swalSuccess(id)
                clearCart()
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                swalError()
            })
            .finally(() => setLoading(false))
    }

    const handleOnChange = (e) => {
        setDataForm({
			...dataForm,
			[e.target.name]: e.target.value,
		})
    }

    const handleSubmit = (e) => {
        createOrder()
    }

    if(loading){
        return  <div className="row center">
                  <Spinner />
                </div>  
      }
    return (
        <>
            <Form 
                onChange={handleOnChange}   
                createOrder={handleSubmit}
                dataForm={dataForm}
            />         
        </>
    
    )
}
export default Checkout