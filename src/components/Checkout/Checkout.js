import { db, collectionsName } from '../../services/firebase/index'
import { useCartContext } from '../../context/CartContext'
import { getDocs,collection,documentId,where,query,writeBatch,addDoc } from "firebase/firestore"
import { useState } from "react";

const Checkout = ()  =>{
    const {cartList, totalPrice,clearCart} = useCartContext()

    const [loading, setLoading] = useState(false)

    
    const createOrder = () => {
  
        setLoading(true)

        const order = {
            buyer: {
                name: 'teste',
                email: 'teste',
                phone: '2222',
                address: 'test',
                comment: 'test'
            },
            items: cartList,
            total: totalPrice()
        }

        const idsCartItems = cartList.map(item => item.id)
        const batch = writeBatch(db)
        let thereIsStock = true
        const itemsRef = collection(db,collectionsName.items)

        getDocs(query(itemsRef, where(documentId(), 'in', idsCartItems)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cartList.find(prod => prod.id === doc.id)?.cantidadCart

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
                clearCart()
                console.log(`La orden de compra ha sido creada, su id es: ${id}`)
            })
            .catch(error => {
                console.log(error)
                console.log("Algunos productos que esta intentando comprar, no tienen stock")
            })
            .finally(() => {
                setLoading(false)
            })
    }
return (
    <button onClick={() => createOrder()}> terminar compra</button>
)
}
export default Checkout