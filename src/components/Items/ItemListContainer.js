import React, { useState,useEffect } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import { getProducts } from "../mock/AsyncMock";

const ItemListContainer = (props) => {
  const [loading,setLoading] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [greeting,setGreeting] = useState(props.greeting)
    const [items,setItems] = useState([{}])
   
    function onAdd (){
      console.log("agrego al carrito")
  }
      useEffect(() => {
         getProducts()
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
              <div> <h3>CARGANDO PRODUCTOS</h3> </div> :
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