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

 const style = {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };



  return (
      <div style={style}>
            <div>
                <button  
                    className="btn btn-dark" 
                    onClick={reducir}>
                <i className="bi bi-dash"></i>
                </button>
                <div>
                    {contador}
                </div>
                <button
                    className="btn btn-dark" 
                    onClick={aumentar}>
                    <i className="bi bi-plus"></i>
                </button>  
                <div>Unidades disponibles : {stock} </div>
            </div>
        <div>
            {stock > 0 ?
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
        </div> 
      </div>
  );

}

export default ItemCount