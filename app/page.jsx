import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>

<div className='my-[50px]'></div>

<div className="flex flex-row justify-center md:justify-start md:py-3 gap-x-5 md:px-10 bg-[#E2E8F0] w-[100%] md:w-[70%] h-[80px] text-[30px] text-center m-auto border-b-4 border-indigo-500  ">
        <div ><img className='w-[60px] m-auto'  src='project.png'/></div>
        <div className='text-[35px]' >MY PROJECTS </div>
        </div>



      < div className=" flex flex-col md:flex-row flex-wrap w-[100%] md:w-[70%]  m-auto text-[20px] text-center  text-black gap-y-3   ">

        <div className="w-[100%] md:w-[100%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/storeproject"><h1>E-commerce </h1></Link></div>

        </div>         








        <div className='my-[100px]'></div>


      
        <div className="flex flex-row justify-center md:justify-start md:py-3 gap-x-5 md:px-10 bg-[#E2E8F0] w-[100%] md:w-[70%] h-[80px] text-[30px] text-center m-auto border-b-4 border-indigo-500  ">
        <div ><img className='w-[60px] m-auto'  src='samples.png'/></div>
        <div  className='text-[35px]'  >MY practices </div>
        </div>



      < div className=" flex flex-row md:flex-row flex-wrap w-[100%] md:w-[70%]  m-auto text-[20px] text-center  text-black gap-y-3   ">
      
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/product"><h1>Components </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/props"><h1>Props </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/contextapi"><h1>Context Api </h1></Link></div>
        <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/blog"><h1>SSG Rendering </h1></Link></div>
        <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/profile"><h1>SSR Rendering </h1></Link></div>

        <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/api/pages/products"><h1>Api route </h1></Link></div>
        <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/suspense/"><h1>React suspense </h1></Link></div>
        <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/pagination/"><h1>Pagination </h1></Link></div>
        <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/lazyloading/"><h1>Lazyloading </h1></Link></div>

        </div> 
        
       







        {/* <div className="flex flex-row my-[100px] justify-start bg-[#E2E8F0] w-[100%] md:w-[70%] h-[80px] text-[30px] text-center m-auto border-b-4 border-yellow-500  ">

        </div>
         */}
    </Fragment>
  )
}
