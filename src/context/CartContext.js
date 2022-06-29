import React, { useState,useContext,createContext } from "react";

const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    
    function addItem(item){

        const inCart = cartList.find((itemInCart) => itemInCart.id === item.id)
        var newCart=[]
            if (inCart) {
                 newCart = cartList.map((ItemInCart)=>{
                    if(ItemInCart.id===item.id){
                        return {...inCart,cantidad:item.cantidad}
                    }else return ItemInCart
                })
                setCartList(newCart)
            }else {
                newCart=[...cartList,item]
                setCartList(newCart)
            } 
    }

    function removeItem(itemId){ 
        const newCart = (items) => items.filter((item) => item.id !== itemId)
        setCartList(newCart);
    }

    function clearCart(){
        setCartList([])
    }

    const cantidadItemsCart = () => {
        return cartList.reduce( (acum, prod) => acum = acum + prod.cantidad , 0 )
     }

     const totalPrice = () => {
        return cartList.reduce( (acum, prod) => acum = acum + (prod.price * prod.cantidad) , 0 )
     }

    return (
        <CartContext.Provider value={{
            cartList,
            totalPrice,
            cantidadItemsCart,
            addItem,
            removeItem,
            clearCart,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}