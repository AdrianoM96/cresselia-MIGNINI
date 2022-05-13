import CartWidget from "../cart/CartWidget";

const Navbar = () =>{
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand" href="/#">Cresselia </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/#">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Hombre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Mujer</a>
            </li>
            </ul>   
        </div>
        
        <div className="col-1">
            <button type="button" className="btn btn-info"><CartWidget></CartWidget></button>
        </div>
       
        </nav>
    );
}

export default Navbar;