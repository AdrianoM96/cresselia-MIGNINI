import React from 'react'
import './Cart.css'

import { useCartContext } from '../../../context/CartContext'

const Cart = () => {

    const {cartList} = useCartContext()
    console.log("Este es el carrito")
    console.log(cartList)
return (
    <div>
       <h4>En mantenimiento, usa la consola para ver los productos del carrito</h4>
    </div>
    )
}

export default Cart