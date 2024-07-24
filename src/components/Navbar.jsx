import React from 'react'

const Navbar = () => {
  return (
    <div className='md:flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-white'>
        <h1 className='w-full text-2xl font-semibold'>Verónica De León Hernández
            <span className='font-light'> analog</span>
        </h1>
        <ul className='flex'>
           <li className='whitespace-nowrap p-4'>About</li>
           <li className='whitespace-nowrap p-4'>Get in touch</li>
        </ul>
    </div>
  )
}

export default Navbar