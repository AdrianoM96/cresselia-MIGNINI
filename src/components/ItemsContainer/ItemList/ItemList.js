import React from 'react'
import Item from '../Item/Item'
const ItemList = ({products}) => {

return (
    <div className="container">
            <div className="row">
             {         
               products.map(product => (
                <div className="col-md-4 mb-5" key={product.id}>
                <Item product={product}/>
                </div>
               ))
             }                
            </div>
        </div>

)

}

export default ItemList