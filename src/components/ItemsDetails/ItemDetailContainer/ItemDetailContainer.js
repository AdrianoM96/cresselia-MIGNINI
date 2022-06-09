
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../../Spinner/Spinner'
import './ItemDetailContainer.css'
import {db} from '../../../services/firebase/index'
import {getDoc,doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [product,setProduct] = useState([{}])
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {

    setLoading(true)

    const itemRef = doc(db,'items',itemId);

      getDoc(itemRef).then((product) => { 
        const productDb =  {id:product.id,...product.data()}
        setProduct(productDb)
      })

      .catch(() => err => console.log(err))
      .finally(() => setLoading(false))
         
      }, [itemId]);
   
  return (
    <div className="container">
      {
      loading ?
        <div className="row center">
          <Spinner></Spinner>
          </div>  
        :
        product !== undefined  ?
          <div className="row ">
            <ItemDetail product={product}> </ItemDetail>
          </div>
        :
          <h2 className="error404"> Producto no encontrado</h2>
      }
    </div>
  )
    }

export default ItemDetailContainer;

