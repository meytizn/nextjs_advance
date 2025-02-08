
"use client"
import React, { createContext, useState } from 'react'



export const CartContext=createContext()





export default function CartProvider({children}) {

  const[cart,setCard]=useState([])
  
  function addToCart(product){
    setCard(prev=>[...prev,product])
  }


  function removeFromCart(productId){
    setCard(prev => prev.filter((product)=>product.id != productId))
  }




  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}
