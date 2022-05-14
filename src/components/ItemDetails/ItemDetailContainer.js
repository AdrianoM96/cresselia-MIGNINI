/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import zapas2 from '../assets/zapas-mujer1.jpg'
import zapas3 from '../assets/zapas-puma-hombre.jpg'
import buzo1 from '../assets/buzo-billabong-mujer.jpg'
import pantalon1 from '../assets/pantalon-hombre.jpg'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product,setProduct] = useState([{}])
    const [loading, setLoading] = useState(true)
    const itemId = useParams()

    // eslint-disable-next-line no-unused-vars
    const [items,setItems] = useState([
      {
        id: 1,
        title: 'Zapatillas puma',
        description:'description',
        image: zapas3,
        category: 'hombre',
        price: "$999"
      },
    {
      id: 2,
      title: 'Pantalon sport',
      description:'description',
      image: pantalon1,
      category: 'hombre',
      price: "$111"
    },
    {
      id: 3,
      title: 'Zapatillas sport',
      description:'description',
      image: zapas2,
      category: 'mujer',
      price: "$222"
    },
    {
      id: 4,
      title: 'Buzo top',
      description:'description',
      image: buzo1,
      category: 'mujer',
      price: "$444"
    }
  ])
 
      useEffect(() => {
        function getProduct  ()  {  
          return new Promise((res, rej) => {
            setTimeout(() => {
              res(
               items
      );
            }, 2000);
          })
        };
        

        getProduct()
        .then((data) => {
            for(let i=0;i<data.length;i++){
                if(data[i].id == itemId.id)   {  
                  setProduct(data[i])
                }
            }
        })
        .catch(() => err => console.log(err))
        .finally(() => setLoading(false))
        
        
      }, [itemId,items]);

    
      
      return (
         <div className="container">
           {loading ?
            <div className="row">
              CARGANDO
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

