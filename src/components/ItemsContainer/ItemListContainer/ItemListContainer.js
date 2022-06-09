import React, { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from '../../Spinner/Spinner'
import './ItemListContainer.css'
import {db} from '../../../services/firebase/index'
import {getDocs,collection,query,where} from 'firebase/firestore'

const ItemListContainer = () => {

  const {categoryId} = useParams();
  const [loading, setLoading] = useState(true)
  const [products,setProducts] = useState([{}])
  const [greeting,setGreeting] = useState('')
 
  useEffect(() => { 

    setLoading(true)
  
    const itemsRef = collection(db, "items");
    
    const itemsCollection =
      categoryId ?
      query(itemsRef, where ("category","==",categoryId)) :
      itemsRef;
  
     getDocs(itemsCollection).then((data) => {
        const productsDb = data.docs.map(product =>{
          return {id:product.id,...product.data()}
        })
        setProducts(productsDb)
    }) 
    .catch((err) => console.log(err))
    .finally(() => setLoading(false),  setGreeting('PRODUCTOS POR CATEGORIA'))

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