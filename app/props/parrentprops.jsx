

import React, { Fragment } from 'react'
import Child from './child'

export default function Parent() {

  return (

    <Fragment>
      <br/>
      <div className='flex flex-row justify-around w-[90%] m-auto bg-green-300 text-center text-[20px] text-black'>class List</div>


    {/* simple type with no obj*/}

    <div><Child course="Next js " teacher="MahdiZamanian" time="12 hours"/></div>
    <div><Child course="React" teacher="Ali Mohammadi" time="6 hours"/></div>
    <div><Child course="Redux" teacher="vahid Kamali" time="10 hours"/></div>
    <div><Child course="Django" teacher="Soheil kamali" time="7 hours"/></div>
    <div><Child course="Python" teacher="Sara Ghasemi" time="3 hours"/></div>



    </Fragment>
  )
}
