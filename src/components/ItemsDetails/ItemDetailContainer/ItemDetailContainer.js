
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getProductDetail} from '../../../mock/promises'
import Spinner from '../../Spinner/Spinner'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [product,setProduct] = useState([{}])
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

      useEffect(() => {

        getProductDetail(itemId)
        .then(data => {
          setProduct(data)
          setLoading(false)
        })
        .catch(() => err => console.log(err))
        
        
      }, [itemId]);

      return (
         <div className="container">
           {
           loading ?
            <div className="row center">
              <Spinner></Spinner>
            </div>
            :
             <div className="row ">
                <ItemDetail product={product}> </ItemDetail>
             </div>
            }
         </div>
      )

    }

export default ItemDetailContainer;

