

import React, { Fragment } from 'react'

export default function Child(props) {
  return (
    <Fragment>
      <br/>
    <div className='flex flex-row justify-around w-[90%] m-auto  text-center text-[20px] text-black'>
      
      <h1>{props.course} </h1>
      <h2>{props.teacher}</h2>
      <h3>{props.time}</h3>
      
      </div>




      </Fragment>
      
  )
}
