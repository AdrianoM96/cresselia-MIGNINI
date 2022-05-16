import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import zapas3 from '../assets/zapas-puma-hombre.jpg'

const ItemDetailContainer = () => {

    const [product,setProduct] = useState([{}])
    const [loading,setLoading] = useState(true)
    const getProduct = () => {
    
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(
              {
                id: 1,
                title: 'Zapatillas puma',
                description:'description',
                image: zapas3,
                category: 'hombre',
                price: "$999"
              }
    );
          }, 2000);
        })
      };

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

