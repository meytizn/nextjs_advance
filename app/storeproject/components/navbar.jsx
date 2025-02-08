import Link from 'next/link'
import React, { Fragment } from 'react'

export default function Navbar() {
  return (
    <Fragment>

    <div  className='flex flex-row justify-around w-[100%] bg-green-300 text-white text-center text-[30px]' >
      <Link href='/storeproject'><div>Store</div></Link>
      <Link href="/storeproject/cart"><div>cart</div></Link>
    </div>
    

    </Fragment>
  )
}
