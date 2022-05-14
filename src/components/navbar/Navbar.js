
import {Link} from 'react-router-dom'
import CartWidget from '../Cart/CartWidget'
const Navbar = () =>{
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
       <Link to="/" className='navbar-brand'>Creselia</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className='nav-link'>Incio</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/hombre" className='nav-link'>Hombre</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/mujer" className='nav-link'>Mujer</Link>
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