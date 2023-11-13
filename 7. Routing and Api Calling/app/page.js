"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [users, setUsers] = useState([])
  const getUser = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <>
    <button onClick={getUser} className='bg-green-600 text-white px-4 py-2 rounded font-bold'>Get Data</button>

    <div className='p-8 bg-slate-100 mt-5'>
      <ul>
        {users.map((e) => {
          return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
        })}
      </ul>
    </div>
    </>
  )
}

export default page