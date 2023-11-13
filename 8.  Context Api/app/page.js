// Topics To learn : Context Api.

// Upcoming Topics :  Showing flash Message, Server Side Rendering vs Client Side Rendering, How to do server Side Rendering and Deployment via Netlify...

"use client"

import { MyContext } from '@/Helper/Context'
import Header from '@/components/Header'
import React, { useContext } from 'react'

const page = () => {
  const user = useContext(MyContext)
  console.log(user);
  return (
    <div>
      {user}
      <Header />
    </div>
  );
}

export default page