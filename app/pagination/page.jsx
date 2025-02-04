
import Link from 'next/link'
import React, { Fragment } from 'react'

let products=[
  {id:0 , title:"product 0 " , price:0} , 
  {id:1 , title:"product 1 " , price:100} , 
  {id:2 , title:"product 2 " , price:200} , 
  {id:3 , title:"product 3 " , price:300} , 
  {id:4 , title:"product 4 " , price:400} , 
  {id:5 , title:"product 5 " , price:500} , 
  {id:6 , title:"product 6 " , price:600} , 
  {id:7 , title:"product 7 " , price:700} , 
  {id:8 , title:"product 8 " , price:800} , 
  {id:9 , title:"product 9 " , price:900}  
]


export default function paginationpage({searchParams}) {
  let ppg=3    //product page number 
  let page =parseInt(searchParams.page) || 1       //default current page  ?page=1

  let firstIndex = (page-1) * ppg  //formula to get first index products
  let endIndex = firstIndex + ppg      //formula to get last index products

  let showProducts = products.slice(firstIndex,endIndex)


  return (
    <Fragment>
<div className='w-[100%] text-center'>
      <ul >
          {showProducts.map((product , index) => (
          
              <li className="m-auto" key={index}> {product.title} - $ {product.price} </li>
          
          ))}
        </ul>
    
        </div>





          <div className=' flex flex-row justify-around text-center w-[100%] py-1 my-5 text-white '>
            <Link className=' bg-blue-500 w-[60px] h-[40px] rounded-md'  href={`?page=${page+1}`}> next </Link>
            <Link className=' bg-blue-500 w-[60px] h-[40px] rounded-md ' href={`?page=${page-1}`}> perv </Link>
          </div>

    </Fragment>
    
  )
}
