/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getProducts} from '../mock/AsyncMock'

const ItemListContainer = (props) => {

  const [greeting,setGreeting] = useState(props.greeting)
  const {categoryId} = useParams();
  //const [filtro,setFiltro]=useState([{}])
  const [loading, setLoading] = useState(true)
  const [items,setItems] = useState([{}])
  
   useEffect(() => { 
    

    getProducts()
    .then((data) => {
      filtrar(data) 
      setLoading(false) 
    
    })
    .catch(() => err => console.log(err))
    
    function filtrar (data){
      setItems({categoryId}.categoryId !== undefined ?
        data.filter(item => item.category === {categoryId}.categoryId) 
            .map(filtrado => (filtrado)) :
            data.map(item => item))
    }
  },[categoryId,items]);

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
                    <ItemList items={items} key={items.id}></ItemList> 
                  </div>
                  </>
                  }  
            </div>          
        )
    
}

export default ItemListContainer;