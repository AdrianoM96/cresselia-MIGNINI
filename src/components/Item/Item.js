import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id,image,title,price,stock}) => {

 
    return (          
        <div className="card">
            <Link to={`/item/${id}`} >
                <img   
                    className='imageDetail'
                    src={image}
                    alt={title}
                    />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">${price}</h5> 
                    <h6>Unidades disponibles: {stock}</h6>        
                </div>
            </Link>
        </div>
     

    
    )
}

export default Item