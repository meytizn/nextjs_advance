

import React, { Fragment } from 'react'
import Navbar from '../components/navbar'
import Link from 'next/link'

export default async function StoreApiDetail({params}) {
  let {id}=params
  let response =await fetch(`https://fakestoreapi.com/products/${id}`)
  let product = await response.json()
  return (
    <Fragment>
      <Navbar/>

      <div className='flex flex-col w-[70%] md:w-[50%] m-auto text-center '>
      <div className='m-auto'><img className='w-[300px] p-5 ' src={product.image}/> </div>
      
      <h1 className='text-[30px] text-bold'>{product.title}</h1>
      <h3 className='text-[18px] text-gray-500'>{product.description}</h3>
     
      <h5 className='text-[18px] text-orange-500'> {product.rating.rate}</h5>

      <div className=' w-[100%] bg-green-400 text-center h-[50px] rounded-md text-[25px] '>Price :  $ {product.price}</div>

      <div className='flex flex-row justify-around  w-[100%] py-2 '>
              <div className=' w-[100%] bg-blue-400 text-center h-[50px] rounded-md text-[25px] '><Link  href={`/storeproject/`}>back to store to add cart </Link></div>
              {/* <div className=' w-[42%] bg-green-400 text-center h-[50px] rounded-md text-[25px] '><Link href="/storeproject/cart"><img  src="basket.png"/></Link>
                 </div> */}
              </div> 
      {/* <h5>category : {product.category}</h5> */}
      </div>
    </Fragment>
  )
}
