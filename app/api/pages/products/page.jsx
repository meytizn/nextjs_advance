'use client'

import Link from "next/link"
import { useEffect, useState } from "react"



export default function ProductPage() {

  const[products,setProducts]=useState([])
  const[newname,setNewName]=useState("")
  const[newprice,setNewPrice]=useState("")



  function fetchproduct(){
     fetch("http://localhost:3000/api/products")
     .then(response=>response.json())
     .then(data=>setProducts(data))
     .catch(error=>console.log(error))


  }


  useEffect(()=>{
    fetchproduct()
  },[])





  function fetchpost(){
    fetch("http://localhost:3000/api/products" , {
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({name:newname , price:newprice})
      
    })
    // .then(response=>response.json())
    // .then(data=>console.log(data))
    .then(fetchproduct())
    .catch(error=>console.log(error))
  }





  return (
    <>
    <ul className="p-5">{products.map((product , index)=>(
      <li key={index}>{product.name} - {product.price}</li>
    ))}</ul>








<div className="w-[100%] bg-yellow-300 h-[30px] text-center my-5 ">add new product</div>


<div className="flex flex-col w-[90%] md:w-[50%] gap-y-5 m-auto  bg-blue-400  outline-none p-3 relative">
<input type="text" placeholder="enter product name ... " value={newname} onChange={()=>setNewName(event.target.value)} />
<input type="text" placeholder="enter product price ... " value={newprice} onChange={()=>setNewPrice(event.target.value)}/>

<Link className="text-white absolute bottom-5 " href="/api/products">
Check api route
</Link>


<button onClick={
  ()=>{fetchpost()
    setNewName("")
    setNewPrice("")
  }


} 

className="bg-white w-[30%] h-[40px] rounded-md m-auto" type="submit">add product</button>
</div>


</>
  )
}
