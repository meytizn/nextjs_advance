"use client"
import React, { Fragment, useContext } from 'react'
import { CartContext } from '../cart/cartcontextapi'
import Link from 'next/link'

export default function MyProduct({products}) {
  
  const {addToCart}=useContext(CartContext)

  return (
    <Fragment>
          {products.map((product,index) => (
            <div className=' w-[40%] md:w-[20%] bg-yellow-300 rounded-md' key={index}>
           
              <img className='w-[100%] h-[300px]' src={product.image}/>

             
            
            <div className=' flex flex-col w-[100%] text-center'>
            <div className="text-sm" > <h1 className='max-w-[50ch] truncate'> {product.title} </h1></div>
              <div className='text-green-500 pl-[30px] w-[100%] bg-black'>
              ${product.price}</div> 
            </div>
            
            <div className='flex flex-row justify-around  w-[100%] py-2 '>
              <div className=' w-[42%] bg-green-400 text-center h-[33px] rounded-md '><Link  href={`/storeproject/${product.id}`}>view more </Link></div>
              
              <div className=' w-[42%] bg-blue-400 text-center h-[33px] rounded-md '><button
               onClick={()=>{
                addToCart(product)
                alert(`product "${product.title }" added in your cart successfully`)
                }} >add to cart </button> </div>
              </div> 
           


            
            </div>


            
          ))}
    </Fragment>
  )
}
