import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>
      
      <div className=" flex flex-row w-[100%]  m-auto text-[20px] text-center bg-blue-500 text-white h-[60px]">
        <div className="w-[25%]"><Link href="/blog"><h1>SSG Rendering </h1></Link></div>
        <div className="w-[25%]"><Link href="/profile"><h1>SSR Rendering </h1></Link></div>
        <div className="w-[25%]"><h3></h3></div>
        <div className="w-[25%]"><h3></h3></div>
        
        
        
        
        
        </div>
    </Fragment>
  )
}
