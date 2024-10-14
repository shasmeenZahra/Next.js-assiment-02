import Link from 'next/link'
import React from 'react'

 export const Navbar = () => {
  return (
    <div className='textbg-pink-300 h-12'>
      <div className='text-pink-950 flex justify-between items-center'>
        <h1 className='text-xl m-2 ml-4 cursor-pointer font-bold'>my page </h1>
      <ul className='flex gap-5'>
        <Link className='hover:text-pink-200' href='/'>Home</Link>
        <Link className='hover:text-pink-200' href='/about'>about</Link>
        <Link className='hover:text-pink-200' href='/contact'>contact</Link>
        <Link className='hover:text-pink-200' href='/service'>service</Link>
        
      </ul>
    </div>
    </div>
    )
}
