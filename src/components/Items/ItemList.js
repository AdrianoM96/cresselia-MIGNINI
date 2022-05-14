import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
return (
    <div className='container' >
            <div className='row '>
             {
               items.map((item) =>
                <div className="col-md-4" key={item.id}>
                  <Item product ={item} />
                </div>
               )
             }               
            </div>
        </div>
)

}

export default ItemList