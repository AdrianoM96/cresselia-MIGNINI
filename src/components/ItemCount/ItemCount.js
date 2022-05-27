import React, { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock,initial,onAdd}) => {

const [contador,setContador] = useState(initial)
  
   const reducir = () => {   

      if (contador>1)
        setContador(contador - 1)
    
   }

   const aumentar = () => {    
    if (contador < stock)
      setContador(contador + 1)
 
 }

  return (
      <div className="container">
            <div className="row count">
                <button 
                    className="btn-lg btn-light btn btn-primary btnSize " 
                    onClick={reducir}>
                    <i className="bi bi-dash-circle-fill"></i>
                </button>            
                    <label className="labelCount">{contador}</label> 
                <button
                    className="btn-lg btn-light btn btn-primary btnSize" 
                    onClick={aumentar}>
                    <i className="bi bi-plus-circle "></i>
                </button>  
            </div>
            <div className="row count">
            <br></br>
            <div>
                <button
                    id="agregarAlCarrito"
                    className="btn btn-dark marginb" 
                    onClick={() => onAdd(contador)}
                    disabled ={ stock <= 0 }>
                    Agregar al carrito
                </button>     
                <h6>Unidades disponibles: {stock}</h6>
        </div> 
            </div> 
      </div>
  );

}

export default ItemCount