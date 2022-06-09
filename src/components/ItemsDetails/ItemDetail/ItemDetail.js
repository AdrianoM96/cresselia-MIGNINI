import React, { useState,useContext } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const ItemDetail = ({ product }) => {

  const [cantidad,setCantidad] = useState(0)
  const {addItem} = useContext(CartContext)


  const handlerOnAdd = (cantidad) =>  {
    setCantidad(cantidad)
    addItem(product,cantidad)
 }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img className="imageDetail"
            src={product.image}
            alt="cr7"
          />
        </div>
        <div className="col-6"> 
          <div className="col-10">
              <h1>{product.title}</h1><br></br>
              {product.description}<br></br>
             <h2>{product.price}</h2> <br></br>  
          </div>
             {product.stock === 0 ?
              <div className="col-5">
                <ItemCount stock={product.stock} initial={0} onAdd={handlerOnAdd}></ItemCount>
              </div>              
              :
              cantidad > 0 ?
              <div className="col-4">
                <Link to='/cart'> <button  className="btn btn-dark" > Ir al Carrito </button></Link>
               
              </div> :
              <div className="col-4">
                <ItemCount stock={product.stock} initial={1} onAdd={handlerOnAdd}></ItemCount>
              </div>                
          }      
             
        </div> 
      </div>
    </div>
  );
};

export default ItemDetail;