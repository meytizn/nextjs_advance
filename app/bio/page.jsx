

import React, { Fragment } from 'react'

export default function Bio() {
  return (
    <Fragment>
      <br/>
      <div className='flex flex-col md:flex-row justify-between text-center w-[90%] md:w-[70%]  rounded-md bg-indigo-500 m-auto'>

    
    <div id='s1' className='flex flex-row w-[100%] justify-center items-center  '><div className='flex flex-row justify-center w-[50%]'><img className='w-[250px] rounded-[150px] p-4 ' src='mehdizamanian.jpg' /></div></div>
    
    
    <div id='s2' className='flex flex-row w-[100%] justify-center items-center bg-indigo-500'>


      <div className='flex flex-col '>

      <div><h1 className='text-white text-[20px] text-left px-5'>Mahdi Zamanian</h1></div>

      <div><h1 className='text-white text-[30px] text-left px-5'>Full-stack Web Developer</h1></div>
      
      <div><h3 className='p-2 text-white'>I'm excited about the possibilities that coding presents and the impact it can have on the world. From creating innovative solutions to important issues, to improving efficiency and productivity in businesses, developing has the power to change lives. I'm eager to be a part of this exciting field and contribute to its growth and development.</h3></div>

      </div>



      </div>
    
    {/* <div id="s3" className='flex flex-row w-[100%] justify-center items-center bg-slate-900 '>s3</div> */}


      </div>
    </Fragment>
  )
}
