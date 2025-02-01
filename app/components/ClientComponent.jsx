'use client'
import React, { useState } from 'react'

export default function Basket() {
  const[counter,SetCounter]=useState(0)
  return (
    <>
    
    <div className="w-[100%] m-auto text-center bg-yellow-300 h-[60px] text-[30px]">Client Component - Add Product</div>
    <div className='flex flex-row my-5 justify-around w-[50%] m-auto text-center h-[60px] text-[30px]'>
    <button className='bg-blue-400 w-[100px] rounded-lg' onClick={()=>SetCounter(counter+1)}>Add</button>
    <h3> {counter}</h3></div>
    </>
    )
}










// export function ShowBasket() {

//   return (
//     <>
//  basket : {counter}
//     </>
//     )
// }
