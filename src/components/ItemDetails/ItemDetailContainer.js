/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {getProductDetail} from '../../Mock/AsyncMock'
import Spinner from '../Spinner/Spinner'


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
            <div className="row d-flex justify-content-center">
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

