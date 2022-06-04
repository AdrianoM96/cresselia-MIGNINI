import './CartWidget.css'

import { useCartContext } from '../../context/CartContext'


const CartWidget = () => {

  const {cantidadItemsCart} = useCartContext();

    return(
        
        <div>
          <i className="bi bi-cart2"> {cantidadItemsCart() !== 0 &&  cantidadItemsCart()}</i> 
      
        
        </div>
    );
  
}

export default CartWidget;