
"use client"
import React, { createContext, useState } from 'react'



export const CartContext=createContext()





export default function CartProvider({children}) {

  const[cart,setCard]=useState([])
  
  // function addToCart(product){
  //   setCard(prev=>[...prev,product])
  // }




  
  function addToCart(product){
    setCard(prev=>{

      let selectedProduct= prev.find((item)=>item.id == product.id)

      if(!selectedProduct){
        return [...prev,{...product,quantity:1}]
      }


      else{
        return prev.map(item =>
          item.id==product.id?
          {...item,quantity:item.quantity+1}:
          item
        )
      }


    }
    )
  }







  function removeFromCart(productId){
    setCard(prev => prev.filter((product)=>product.id != productId))
  }





  function updateQuantity(productId,NewQuantity){
    setCard(prev=>
      prev.map(item=>
        item.id == productId?
        {...item,quantity:NewQuantity}:
        item
      )
    )
  }




  function getTotal(){
    let total = 0
    cart.forEach(item=>total+=item.quantity*item.price)
    return total
  }







  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity,getTotal}}>
        {children}
    </CartContext.Provider>
  )
}
