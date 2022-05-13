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
      <div >
            <div>
                <button  
                    className="btn btn-dark" 
                    onClick={reducir}>
                <i className="bi bi-dash"></i>
                </button>
                <div>
                    {contador}<br></br>
                    
                </div>
                <button
                    className="btn btn-dark" 
                    onClick={aumentar}>
                    <i className="bi bi-plus"></i>
                </button>  
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
        <div><h6>Unidades disponibles: {stock}</h6>
                  </div>
      </div>
  );

}

export default ItemCount