import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    
    return (    
        
            <div className="card text-center " key={product.id}>
                <Link to={`/item/${product.id}`} >
                    <img   
                        className='imageDetail'
                        src={product.image}
                        alt="cr7"
                        />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h5 className="card-title">${product.price}</h5>             
                    </div>
                </Link>
            </div>
     

    
    )
}

export default Item