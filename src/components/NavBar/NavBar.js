
import {Link,NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { useCartContext } from '../../context/CartContext'
const Navbar = () =>{
    
  const {cantidadItemsCart} = useCartContext();
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
       <Link to="/" className='navbar-brand'>Cresselia</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/" className='nav-link'>INICIO</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/category/hombre" className='nav-link'>HOMBRE</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/category/mujer" className='nav-link'>MUJER</NavLink>
            </li>
            </ul>   
        </div>
        <Link to='/cart'>
            <div className="col-1">
                <button className='btn btn-info cart-widget'>
                    <CartWidget/>
                    <div className='cart-widget-num'>
                        {cantidadItemsCart() !== 0 && cantidadItemsCart()}
                    </div>
                    
                </button>
            </div>
        </Link>
        </nav>
    );  
}

export default Navbar;