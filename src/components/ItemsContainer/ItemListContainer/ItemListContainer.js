import React, { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getProducts,getProductsCategory} from '../../../mock/promises'
import Spinner from '../../Spinner/Spinner'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true)
  const [products,setProducts] = useState([{}])
  const [greeting,setGreeting] = useState('')
 
  useEffect(() => { 

  setLoading(true)

  !categoryId ?
    getProducts()
      .then (data => {
        setGreeting('LISTA DE PRODUCTOS')
        setProducts(data)
        
    })

    .catch((err) => console.log(err))
    .finally(() => setLoading(false)) :

    getProductsCategory(categoryId)
      .then((data) => {
        setGreeting('PRODUCTOS POR CATEGORIA')
        setProducts(data) 
        
    })

    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  },[categoryId]); 

        return(
            <div className="container">
               { 
               loading ? 
                  <div className="row center">
                    <Spinner />
                  </div> 
                  :
                  products.length > 0 ?
                  <>
                   <div className="row center"> 
                      <h5 className="greeting">{greeting}</h5>
                    </div> 
                    <div className="row">
                      <ItemList products={products}></ItemList> 
                    </div> 
                 </> 
                 :
                  <div className="row center">
                    <h2 className="error404"> No hay productos por el momento en esta categoria o esta categoria
                     no existe</h2>
                  </div>
                  }  
            </div>          
        )
}

export default ItemListContainer;