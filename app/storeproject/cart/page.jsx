import React, { Fragment } from 'react'




export default function Cart() {
  
let cart = [
  {
  "id": 1,
  "title": "Fjallraven  Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120}
  },
  {
    "id": 1,
    "title": "Ps4 PRO",
    "price": 899.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    },
}
]
  return (
    <>
      <div className='flex flex-col w-[90%] md:w-[50%]  bg-white h-[500px] my-7 gap-y-5 py-5 m-auto'>
        {
        cart.length==0 ?
         (<h3>your cart is emtey</h3>) 

        :
        
        cart.map(
          (c,index)=>(
          <div className='flex flex-row justify-between flex-wrap gap-y-5  w-[100%] px-5' key={index}>
            <div className='w-[50%] '>{c.title}</div>
            <div className='text-green-500  '>${c.price}</div>
            <div  className='w-[10%] '><button className='text-white bg-red-500 w-[70px] h-[30px]'>Remove </button></div>
            </div>
            )
        )
      
        }
      </div>
    </>
  )
}
