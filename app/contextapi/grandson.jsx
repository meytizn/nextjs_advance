'use client'

import React, { Fragment, useContext } from 'react'
import { NewContext } from './NewContext'

// grandsone component

export default function Grandsonpage() {
  let data = useContext(NewContext)
  return (
    <Fragment>

    <br/>

    <div className='flex flex-row justify-around w-[90%] md:w-[50%] m-auto bg-green-300 text-center text-[20px] text-black'>
    <div className='bg-yellow-400 w-[50%]'>Sign in checker : </div>
    {data.islogin?
    (<div className='bg-yellow-400 w-[50%]'>welcome {data.name}</div>)
    :(<div className='bg-red-400 w-[50%]'>you have not signup yet </div>)
    }
    
    
    </div>
    </Fragment>
  )
}
