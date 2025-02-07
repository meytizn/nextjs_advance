'use client'

// contextApi provider component

import React, { createContext } from 'react'

export let NewContext=createContext()


export default function AppDataProvider({children}) {

  let data = {islogin:false,name:"Admin"}


  return (
    <NewContext.Provider value={data}>
      {children}
    </NewContext.Provider>
  )
}
