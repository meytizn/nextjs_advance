
import Link from 'next/link'
import React, { useContext } from 'react'
import MyProduct from './products'
// import { CartContext } from '../cart/cartcontextapi'

export default async function ProductApi() {
  
  let response =await fetch("https://fakestoreapi.com/products")
  let products = await response.json()



  // let {addToCard}=useContext(CartContext)



  return (
    
<div className=' flex flex-row flex-wrap w-[100%] md:w-[90%] m-auto  justify-center gap-x-5 gap-y-5 justify-items-center '>

      <MyProduct products={products}/>

        </div>

  )
}
