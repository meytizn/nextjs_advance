import Link from 'next/link'
import React, { Fragment } from 'react'

export default function Navbar() {
  return (
    <Fragment>
<br/>
    <div  className='flex flex-row justify-around rounded-md w-[90%] md:w-[76%] m-auto bg-white text-center text-[30px] text-black' >
      <Link href='/storeproject'><div>Store</div></Link> 
      <Link href='/storeproject'><div></div></Link>
      <Link href='/storeproject'><div></div></Link>
      <Link href="/storeproject/cart"><img className='w-100px' src="basket.png"/></Link>
    </div>
    
<br/>
    </Fragment>
  )
}
