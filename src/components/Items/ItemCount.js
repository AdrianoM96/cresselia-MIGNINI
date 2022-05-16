import React, { useState } from "react"



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
                {
                stock > 0 ?
                <button
                    id="agregarAlCarrito"
                    className="btn btn-dark" 
                    onClick={() => onAdd(contador)}>
                    Agregar al carrito
                </button> :
                <button
                    id="agregarAlCarrito"
                    className="btn btn-dark">
                    Agregar al carrito
                </button>
                }      
                <h6>Unidades disponibles: {stock}</h6>
        </div> 
            </div> 
      </div>
  );

}

export default ItemCount