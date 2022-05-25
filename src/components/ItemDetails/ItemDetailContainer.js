/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {getProducts} from '../mock/AsyncMock'


const ItemDetailContainer = () => {

    const [product,setProduct] = useState([{}])
    const [loading, setLoading] = useState(true)
    const itemId = useParams()

      useEffect(() => {

        getProducts()
        .then((data) => {
            for(let i=0;i<data.length;i++){
                if(data[i].id == itemId.id)   {  
                  setProduct(data[i])
                }
            }
            setLoading(false)
        })
        .catch(() => err => console.log(err))
        
        
      }, [itemId]);

    
      
      return (
         <div className="container">
           {
           loading ?
            <div className="row">
              CARGANDO PRODUCTO
            </div>
            :
             <div className="row">
                <ItemDetail product={product} key={product.id}> </ItemDetail>
             </div>
            }
         </div>
      )

    }

export default ItemDetailContainer;

