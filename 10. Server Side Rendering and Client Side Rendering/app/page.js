"use client"

import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
  const [userData, setUserData] = useState("")
  
  const getData =async () => {
    const response = await axios.get("https://picsum.photos/v2/list")
    setUserData(JSON.stringify(response.data))
  }
  return (
    <div>
      <button onClick={getData}>
        Click
      </button>
      {userData}
    </div>
  )
}

export default page