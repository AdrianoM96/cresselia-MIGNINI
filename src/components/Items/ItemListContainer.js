/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
   
 
     const [greeting,setGreeting]= useState(props.greeting)
      
        function onAdd (){
            console.log("agrego al carrito")
        }
    
 
        return(
            <div>
                <p> {greeting} </p>
                <ItemCount stock={6} initial={1} onAdd={onAdd}></ItemCount>
            </div>
        );
    }
export default ItemListContainer;