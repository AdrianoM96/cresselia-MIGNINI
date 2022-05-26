/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getProducts,getProductsCategory} from '../../Mock/AsyncMock'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = () => {

  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true)
  const [items,setItems] = useState([{}])
  const [greeting,setgreeting] = useState('')
 
  useEffect(() => { 

    !categoryId ?
    getProducts()
    .then (items => {
      setItems(items)
      setLoading(false) 
      setgreeting('LISTA DE PRODUCTOS')
    })
    .catch((err) => console.log(err)) :

    getProductsCategory(categoryId)
    .then((data) => {
      setItems(data) 
      setLoading(false) 
      setgreeting('PRODUCTOS POR CATEGORIA')
   
    })
    .catch((err) => console.log(err))
  },[categoryId]); 

  
        return(
            <div className="container">
               { 
               loading ? 
                  <div className="row d-flex justify-content-center">
                    <Spinner />
                  </div> :
                  <>
                  <div className="row d-flex justify-content-center"> 
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