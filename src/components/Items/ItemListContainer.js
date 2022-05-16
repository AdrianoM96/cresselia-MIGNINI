import React, { useState,useEffect } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import zapas2 from '../assets/zapas-mujer1.jpg'
import zapas3 from '../assets/zapas-puma-hombre.jpg'
import buzo1 from '../assets/buzo-billabong-mujer.jpg'
import pantalon1 from '../assets/pantalon-hombre.jpg'

const ItemListContainer = (props) => {
  const [loading,setLoading] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [greeting,setGreeting] = useState(props.greeting)
    const [items,setItems] = useState([{}])
    // eslint-disable-next-line no-unused-vars
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

    function onAdd (){
      console.log("agrego al carrito")
  }

      const  simuloRetraso = () => {   
      
        return new Promise((res, rej) => {
          setTimeout(() => {
            res(
              itemsBd
              );
          }, 2000);
        })
      }
    
      useEffect(() => {
         simuloRetraso()
        .then((data) => {
          setItems(data);  
          setLoading(false)   
        })
        .catch(() => err => console.log(err)) 
      },);

        return(
            <div >
              {
              loading ? 
              <div> CARGANDO PRODUCTOS </div> :
              <>
                <div> <p> {greeting} </p></div>
                <div >
                   <ItemCount stock={6} initial={1} onAdd={onAdd}></ItemCount>
                   </div>
                <div >
                    <ItemList items={items} ></ItemList>
                </div>
                </>
                } 
            </div>
        );
    
}



export default ItemListContainer;