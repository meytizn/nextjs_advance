import Link from 'next/link'
import React, { Fragment } from 'react'

export default function Projects() {
  return (
    <Fragment>
            <br/>
      <div className='flex flex-col md:flex-row justify-between text-center w-[90%] md:w-[70%]  rounded-md  m-auto bg-white gap-y-10'>

    
    <div id='s1' className='flex flex-row w-[100%] justify-around text-center  '>

      <div className='flex flex-col w-[90%] text-center justify-center '>
      <div className='' >
        
      <div className='flex flex-row  w-[100%]  text-[35px]  border-b-4 border-indigo-500 h-[90px] justify-evenly py-2' ><div className='w-[20%]'><img className='w-[70px]  '  src='project.png'/></div> <div className='flex flex-row w-[50%]'>Projects </div> </div>


          </div>
      
      

      <div className="w-[100%] md:w-[100%] h-[70px] py-5 hover:text-white hover:bg-yellow-400"><Link href="/storeproject"><h1>JAVAN MARKET <span className='text-green-600'>&nbsp; &nbsp;&nbsp;  Front-end Application &nbsp;&nbsp;</span> <span className='text-green-600'>&nbsp; &nbsp;Deployed</span></h1></Link></div>
      <div className="w-[100%] md:w-[100%] h-[70px] py-5 hover:text-white hover:bg-yellow-400"><Link href="https://bookamair.pythonanywhere.com/"><h1>BOOKFA NEWS <span className='text-green-600'>&nbsp; &nbsp;&nbsp;  Full-Stack Application</span> <span className='text-green-600'>&nbsp; &nbsp;Deployed</span></h1></Link></div>
      <div className="w-[100%] md:w-[100%] h-[70px] py-5 hover:text-white hover:bg-yellow-400"><Link href="http://zamanianmehdi23blogproject.pythonanywhere.com/"><h1>Backend-Applications <span className='text-green-600'>&nbsp; &nbsp;&nbsp;  python(Django)</span><span className='text-green-600'>&nbsp; &nbsp;Deployed</span> </h1></Link></div>
      <div className="w-[100%] md:w-[100%] h-[70px] py-5 hover:text-white hover:bg-yellow-400"><Link href="https://meytizn.github.io/myprojects/"><h1>frontend-Applications <span className='text-green-600'>&nbsp; &nbsp;&nbsp;  JavaScript(Vanila)</span> <span className='text-green-600'>&nbsp; &nbsp;Deployed</span></h1></Link></div>
      <div className="w-[100%] md:w-[100%] h-[70px] py-5 hover:text-white hover:bg-yellow-400"><Link href="https://bookama.ir/"><h1>Bookama E-commerce <span className='text-green-600'>&nbsp; &nbsp;&nbsp;  frelance(wordpress) </span> <span className='text-green-600'>&nbsp; &nbsp;Deployed</span></h1></Link></div>
     
      </div>

        </div>
    
    




        <div id='s2' className='flex flex-row w-[100%] justify-around text-center border-l-4 border-indigo-500  '>

<div className='flex flex-col w-[90%] text-center justify-center '>

<div className='flex flex-row  w-[100%]  text-[30px]  border-b-4 border-indigo-500 justify-evenly h-[90px] py-2' ><div className='w-[20%]'><img className='w-[90px] py-4 '  src='next.svg'/></div> <div className='flex flex-row w-[50%]'>Mini projects </div> </div>












< div className=" flex flex-row md:flex-row flex-wrap w-[100%] md:w-[100%]  text-[20px] text-center  text-black gap-y-3   ">
      
      <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/product"><h1>Components </h1></Link></div>
      <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/props"><h1>Props </h1></Link></div>
      <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/contextapi"><h1>Context Api </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/blog"><h1>SSG  </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/profile"><h1>SSR  </h1></Link></div>

       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/api/pages/products"><h1>Api route </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/suspense/"><h1> suspense </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/pagination/"><h1>Pagination </h1></Link></div>
       <div className="w-[50%] md:w-[25%] h-[70px] py-5 hover:text-white hover:bg-indigo-500"><Link href="/lazyloading/"><h1>Lazyloading </h1></Link></div>

       </div> 




















</div>









  </div>
    
    {/* <div id="s3" className='flex flex-row w-[100%] justify-center items-center bg-slate-900 '>s3</div> */}


      </div>
    </Fragment>
  )
}
