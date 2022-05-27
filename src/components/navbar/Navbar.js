
import {Link} from 'react-router-dom'
import CartWidget from '../Cart/CartWidget'
import './NavBar.css'

const Navbar = () =>{
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
       <Link to="/" className='navbar-brand'>Cresselia</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className='nav-link'>INICIO</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/hombre" className='nav-link'>HOMBRE</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/mujer" className='nav-link'>MUJER</Link>
            </li>
            </ul>   
        </div>
        
        <div className="col-1">
            <button type="button" className="btn btn-info"> <CartWidget></CartWidget> </button>
        </div>
        </nav>
    );
}

export default Navbar;