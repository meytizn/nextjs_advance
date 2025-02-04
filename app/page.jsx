import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>
      
      < div className=" flex flex-col md:flex-row flex-wrap w-[100%]  m-auto text-[20px] text-center bg-blue-500 text-white gap-y-3">

        <div className="w-[100%] md:w-[25%] h-[60px] py-5"><Link href="/blog"><h1>SSG Rendering </h1></Link></div>
        <div className="w-[100%] md:w-[25%] h-[60px] py-5"><Link href="/profile"><h1>SSR Rendering </h1></Link></div>
        <div className="w-[100%] md:w-[25%] h-[60px] py-5"><Link href="/product"><h1>Components </h1></Link></div>
        <div className="w-[100%] md:w-[25%] h-[60px] py-5"><h3><Link href="/api/pages/products"><h1>Api route </h1></Link></h3></div>
        <div className="w-[100%] md:w-[25%] h-[60px] py-5"><h3><Link href="/suspense/"><h1>React suspense </h1></Link></h3></div>
        <div className="w-[100%] md:w-[25%] h-[60px] py-5"><h3><Link href="/pagination/"><h1>Pagination </h1></Link></h3></div>

        </div> 
        
        
        
    </Fragment>
  )
}
