import React, { useState,useContext,createContext } from "react";

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    
    function addItem(item, cantidad){

        const inCart = cartList.find((itemInCart) => itemInCart.id === item.id)
        var newCart=[]
            if (inCart) {
                 newCart = cartList.map((ItemInCart)=>{
                    if(ItemInCart.id===item.id){
                        return {...inCart,cantidadCart:cantidad}
                    }else return ItemInCart
                })
                setCartList(newCart)
            }else {
                newCart=[...cartList,{...item,cantidadCart:cantidad}]
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
        return cartList.reduce( (acum, prod) => acum = acum + prod.cantidadCart , 0 )
     }

     const totalPrice = () => {
        return cartList.reduce( (acum, prod) => acum = acum + (prod.price * prod.cantidadCart) , 0 )
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

export default CartContextProvider