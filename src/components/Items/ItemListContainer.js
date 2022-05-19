import React, { useState,useEffect } from "react";
import ItemList from "./ItemList";
import {getProducts} from '../mock/AsyncMock'

const ItemListContainer = (props) => {
  const [loading,setLoading] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [greeting,setGreeting] = useState(props.greeting)
    const [items,setItems] = useState([{}])
    
      useEffect(() => {
        getProducts()
        .then((data) => {
          setItems(data);  
          setLoading(false) 
      
        })
        .catch(() => err => console.log(err)) 
      },[]);

        return(
            <div >
              {
              loading ?
                <div> CARGANDO PRODUCTOS </div> :
                <>
                <div> <p> {greeting} </p></div>
                <div >
                    <ItemList items={items} ></ItemList>
                </div>
                </>
              }
            </div>
        );
    
}



export default ItemListContainer;