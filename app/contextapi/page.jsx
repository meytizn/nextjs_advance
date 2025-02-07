import React, { Fragment } from 'react'
import AppDataProvider from './NewContext'
import Grandsonpage from './grandson'

// father component

export default function Fatherpage() {
  return (
   <Fragment>
    <AppDataProvider>
          <br/>
      <div className='flex flex-row justify-around w-[90%] m-auto bg-green-300 text-center text-[20px] text-black'>ContextApi</div>
      
      <Grandsonpage/>
      </AppDataProvider>
   </Fragment>
  )
}
