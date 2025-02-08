import Link from 'next/link'
import React, { Fragment } from 'react'

export default function Navbar() {
  return (
    <Fragment>
<br/>
    <div  className='flex flex-row justify-between px-2 content-center items-center rounded-md w-[90%] md:w-[76%] m-auto bg-white text-center text-[30px] text-black' >
      <Link  href='/storeproject'><div>JavanMarket</div></Link> 
     
      <Link  href='/storeproject'><div><h1 className='text-yellow-500' >Demo</h1></div></Link>
      <Link  href="/storeproject/cart"><div ><img className='w-100px' src="basket.png"/></div></Link>
    </div>
    
<br/>
    </Fragment>
  )
}
