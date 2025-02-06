import Link from 'next/link'
import React from 'react'

export default async function ProductApi() {
  
  let response =await fetch("https://fakestoreapi.com/products")
  let products = await response.json()

  return (
    
<div className=' flex flex-row flex-wrap w-[100%] md:w-[90%] m-auto bg-blue-300 justify-center gap-x-5 gap-y-5 justify-items-center '>
          {products.map((product,index) => (
            <div className=' w-[40%] md:w-[20%] bg-yellow-300 rounded-md' key={index}>
           
              <img className='w-[100%] h-[300px]' src={product.image}/>

             
            
            <div className=' flex flex-col w-[100%] text-center'>
            <div className="text-sm"> {product.title} </div>
              <div className='text-green-500 pl-[30px] w-[100%] bg-black'>
              ${product.price}</div> 
            </div>
            
            <div className='flex flex-row justify-around  w-[100%] py-2 '>
              <div className=' w-[42%] bg-green-400 text-center h-[33px] rounded-md '><Link  href={`/storeproject/${product.id}`}>view more </Link></div>
              <div className=' w-[42%] bg-blue-400 text-center h-[33px] rounded-md '>add to card </div>
              </div> 
           


            
            </div>
          ))}
        </div>

  )
}
