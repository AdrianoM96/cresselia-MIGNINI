import React from 'react'

const Item = ({product}) => {

    
    return (
        
            <div className="card text-center">
                <img   
                     className='imageDetail'
                     src={product.image}
                     alt="cr7"
                    />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                     <h5 className="card-title">{product.price}</h5>  
                    <a href="/#" className="btn btn-outline-secondary rounded-0" target="_blank">Añadir al carro</a>
                </div>
            </div>
    

    
    )
}

export default Item