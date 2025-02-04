

import React, { Suspense } from 'react'


async function fetchproduct(){
  let response = await fetch("https://fakestoreapi.com/products")

  if(!response.ok){
    throw Error("fetch failed")}

  return response.json()

}



export default async function SuspensePage() {
  let products = await fetchproduct()
  return (
    <>
    <Suspense fallback={<h1>loading .....  </h1>}>
    <div>
      {products.map((product,index)=>(
        <li key={index}>{product.title} - {product.price}</li>)
      )}
    </div>

    </Suspense>
    </>
  )
}
