import './CartWidget.css'
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {cantidadItemsCart} = useCartContext()

    const cantidad = cantidadItemsCart()
    
    return(  
      <Link to = "/cart">  
            <button className='btn btn-info cart-widget'>
                <div>        
                    <i className="bi bi-cart2"></i> 
                    {cantidad}
                </div>
            </button>
        </Link>
    );
  
}

export default CartWidget;