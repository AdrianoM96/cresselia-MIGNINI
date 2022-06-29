
import {Link,NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import React, { useState,useEffect } from "react"
import './NavBar.css'
import {db,collectionsName} from '../../services/firebase/index'
import {getDocs,collection} from 'firebase/firestore'

const Navbar = () =>{
    
    const [categories,setCategories] = useState([])
    
    useEffect(() => {
        const itemsRef = collection(db, collectionsName.categories);
        
        getDocs(itemsRef).then((data) => {
            const categories = data.docs.map(data =>{
                return {id:data.id,...data.data()}
            })
            setCategories(categories)
        }) 
        .catch((err) => console.log(err))  

    }, [])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <Link to="/" className='navbar-brand'>Cresselia</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        categories.map( category => (
                            <li key={category.id} className="nav-item">
                                <NavLink to={`/category/${category.id}`} className='nav-link'>{category.description}</NavLink>
                            </li>
                        ))
                    }
                </ul>   
            </div>     
                <div className="col-1">
                        <CartWidget/>              
                </div>
        </nav>
    );  
}

export default Navbar;