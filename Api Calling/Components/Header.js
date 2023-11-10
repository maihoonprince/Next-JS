import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='px-5 h-8 bg-green-400 flex items-center justify-between'>
      <h2>Logo</h2>
      <div className='flex gap-8'>
      <Link href='/About'>About</Link>
      <Link href='/Product'>Product</Link>
      <Link href='/Courses'>Courses</Link>
      </div>
    </div>
    </>
  )
}

export default Header