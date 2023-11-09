"use client"

import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => { 
  const [user, setUser] = useState("Prince")
  return (
    <>
    <Header user = {user}/>
    {user}
    </>
  )
}

export default page