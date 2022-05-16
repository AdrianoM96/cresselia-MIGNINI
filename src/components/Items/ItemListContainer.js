/* eslint-disable no-unused-vars */

import React, { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import zapas2 from '../assets/zapas-mujer1.jpg'
import zapas3 from '../assets/zapas-puma-hombre.jpg'
import buzo1 from '../assets/buzo-billabong-mujer.jpg'
import pantalon1 from '../assets/pantalon-hombre.jpg'

const ItemListContainer = (props) => {

  const [greeting,setGreeting] = useState(props.greeting)
  const {categoryId} = useParams();
  const [filtro,setFiltro]=useState([{}])
  const [loading, setLoading] = useState(true)
  const [items,setItems] = useState([{}])
  const [itemsBd,setItemsBd] = useState([
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
    function simuloRetraso(){  
      return new Promise((res, rej) => {
      
        setTimeout(() => {
          res(
            itemsBd
            );
        }, 2000);
      
      })
      
    }
    function filtrar (){
        
      setFiltro({categoryId}.categoryId !== undefined ?
        itemsBd.filter(item => item.category === {categoryId}.categoryId) 
            .map(filtrado => (filtrado)) :
            itemsBd.map(item => item))
    }
    simuloRetraso()
    .then((data) => {
      setItems(data);    
      setLoading(false)
    })
    .catch(() => err => console.log(err))
    .finally(()=> filtrar())
    

  },[categoryId,itemsBd,items]);

        return(
            <div className="container">
               { 
               loading ? 
                  <div className="row"> 
                    CARGANDO PRODUCTOS
                  </div> :
                  <>
                  <div className="row"> 
                    {greeting}
                  </div> 
                  <div className="row">
                    <ItemList items={filtro} key={filtro.id}></ItemList> 
                  </div>
                  </>
                  }  
            </div>          
        )
    
}




export default ItemListContainer;