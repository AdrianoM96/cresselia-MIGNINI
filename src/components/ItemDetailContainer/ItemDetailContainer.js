
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import './ItemDetailContainer.css'
import {db,collectionsName} from '../../services/firebase/index'
import {getDoc,doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([{}])
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {

    setLoading(true)

    const itemRef =doc(db,collectionsName.items,itemId)

    getDoc(itemRef).then((data) => {
      const itemBd = {id:data.id,...data.data()}
      setProduct(itemBd)
    })

    .catch(() => err => console.log(err))
    .finally(() => setLoading(false))
         
  }, [itemId]);

  if(loading){
    return  <div className="row center"><Spinner/></div>  
  }

  if(product.title == null){
    return <h1 className='error404'> Este producto no existe</h1>
  }

  return (
    <div className="container">
          <div className="row ">
            <ItemDetail {...product} /> 
          </div>
    </div>
  )
  
  }
export default ItemDetailContainer;

