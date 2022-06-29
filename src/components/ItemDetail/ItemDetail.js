import React, { useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({ id,image,title,description,price,stock }) => {

  const [cantidad,setCantidad] = useState(0)
  const {addItem} = useCartContext()


  const handlerOnAdd = (cantidad) =>  {
    setCantidad(cantidad)
    addItem({id,image,title,price,stock,cantidad})
 }


  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img className="imageDetail"
            src={image}
            alt={title}
          />
        </div>
        <div className="col-6"> 
          <div className="col-10">
              <h1>{title}</h1><br></br>
              {description}<br></br>
              <h2>${price}</h2> <br></br>  
          </div>
          
          {
            cantidad > 0 ?
            <>
              <div className="col-4">
                <Link to='/cart'> <button  className="btn btn-dark" > Ir al Carrito </button></Link>
              </div> 
              
              <div className="mt-3">
                <Link to='/'> <button  className="btn btn-dark" > Seguir comprando </button></Link>
              </div>
            </>
            :
              <div className="col-4">
                <ItemCount stock={stock} initial={1} onAdd={handlerOnAdd} />
              </div>                
          }         
        </div> 
      </div>
    </div>
  );
};

export default ItemDetail;