import React, { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getProducts,getProductsCategory} from '../../../mock/promises'
import Spinner from '../../Spinner/Spinner'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true)
  const [items,setItems] = useState([{}])
  const [greeting,setGreeting] = useState('')
 
  useEffect(() => { 

    !categoryId ?
    getProducts()
    .then (items => {
      setItems(items)
      setLoading(false) 
      setGreeting('LISTA DE PRODUCTOS')
    })
    .catch((err) => console.log(err)) :

    getProductsCategory(categoryId)
    .then((data) => {
      setItems(data) 
      setLoading(false) 
      setGreeting('PRODUCTOS POR CATEGORIA')
   
    })
    .catch((err) => console.log(err))
  },[categoryId]); 

  
        return(
            <div className="container">
               { 
               loading ? 
                  <div className="row center">
                    <Spinner />
                  </div> :
                  <>
                  <div className="row center"> 
                    <h5 className="greeting">{greeting}</h5>
                  </div> 
                  <div className="row">
                    <ItemList items={items}></ItemList> 
                  </div>
                  </>
                  }  
            </div>          
        )
    
}

export default ItemListContainer;