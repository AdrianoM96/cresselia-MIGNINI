import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {getProduct} from '../mock/AsyncMock'

const ItemDetailContainer = () => {

    const [product,setProduct] = useState([{}])
    const [loading,setLoading] = useState(true)

      useEffect(() => {
        getProduct()
        .then((data) => {
          setProduct(data);     
          setLoading(false)
         
        })
        .catch(() => console.log("error"));
      }, []);

      return (
         <div className="container">
           {
             loading ?
                <div></div> :
             <>
              <div>DETAIL CONTAINER </div>
              <div className="row">
                <ItemDetail product={product}> </ItemDetail>
             </div>
             </> 
           }
             
         </div>
      )

    }

export default ItemDetailContainer;

