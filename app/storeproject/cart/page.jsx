"use client"
import React, { Fragment, useContext } from 'react'
import { CartContext } from './cartcontextapi'





export default function Cart() {
  
  const {cart,removeFromCart} = useContext(CartContext)


  return (
    <>
      <div className='flex flex-col w-[90%] md:w-[50%]  bg-white h-[500px] my-7 gap-y-5 py-5 m-auto'>
        {
        cart.length==0 ?
         (<h3>your cart is emtey</h3>) 

        :
        
        cart.map(
          (product,id)=>(
          <div className='flex flex-row justify-between flex-wrap gap-y-5  w-[100%] px-5' key={id}>
            <div className='w-[50%] '>{product.title}</div>
            <div className='text-green-500  '>${product.price}</div>
            <div  className='w-[10%] '><button onClick={()=>{ removeFromCart(product.id) }} className='text-white bg-red-500 w-[70px] h-[30px]'>Remove </button></div>
            </div>
            )
        )
      
        }
      </div>
    </>
  )
}
