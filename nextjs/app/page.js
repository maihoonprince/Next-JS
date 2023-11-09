"use client"

import React, { useState } from 'react'

export const page = () => {
  // let marks = 80;

  const [marks, setMarks] = useState(80)
  return (
    <>
    <h1>My marks in math is {marks}</h1>
    <button onClick={() => {
      setMarks(33)
    }}>Update</button>
    </>
  )
}
export default page