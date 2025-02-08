"use client"
import React, { Fragment, useContext } from 'react'
import { CartContext } from './cartcontextapi'





export default function Cart() {
  
  const {cart,removeFromCart,updateQuantity,getTotal} = useContext(CartContext)


  return (
    <>
      <div className='flex flex-col w-[100%] md:w-[100%]  bg-white h-[500px] my-7 gap-y-5 py-5 m-auto text-center'>
        {
        cart.length==0 ?
         (<h3>your cart is emtey</h3>) 

        :
        
        cart.map(
          (product,id)=>(
          <div className='flex flex-row items-center justify-between flex-wrap gap-y-5  w-[100%] px-5' key={id}>

            <div><img className='w-[100px]' src={product.image}/></div>
            <div><h1 className='max-w-[15ch] truncate'>{product.title}</h1></div>
            <div className='text-green-500  '>${product.price}</div>

            <div ><input  className='w-[80px]'  type='number' value={product.quantity} 
            min="1" onChange={()=>updateQuantity(product.id,Number(event.target.value))}/></div>


            <div  className='w-[10%] '><button onClick={()=>{ removeFromCart(product.id) }} className='text-white bg-red-500 w-[70px] h-[30px]'>Remove </button></div>
            </div>
            )
        )
      
        }

        <div className='m-auto'>
        <h3>Total price : $ {getTotal().toFixed(2)}</h3>
        </div>

      </div>
    </>
  )
}
