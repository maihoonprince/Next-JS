import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
    <div className='px-5 h-8 bg-green-400  flex items-center justify-between' >
        <h6 >Prince Logo</h6>
        <div>
            <Link href="https://www.linkedin.com/in/prinx/" >LinkedIn</Link>
        </div>
    </div>
    </>
  )
}

export default Footer