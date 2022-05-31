
import {Link,NavLink} from 'react-router-dom'
import CartWidget from '../Cart/CartWidget'
import './NavBar.css'

const Navbar = () =>{
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
        
        <div className="col-1">
            <Link to= "/cart"><button type="button" className="btn btn-info"> <CartWidget></CartWidget> </button></Link>
        </div>
        </nav>
    );  
}

export default Navbar;