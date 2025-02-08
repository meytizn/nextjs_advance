import Link from 'next/link'
import React, { Fragment } from 'react'

export default function Footer() {
  return (
    <Fragment>
<br/>
    <div  className='flex flex-row justify-around rounded-md w-[90%] md:w-[76%] m-auto bg-black text-center text-[25px] text-white ' >
      <Link className='w-[100%] text-center' href='/storeproject'><div>&copy;created by Mehdi Zamanian</div></Link> 

    </div>
    
<br/><br/>
    </Fragment>
  )
}
