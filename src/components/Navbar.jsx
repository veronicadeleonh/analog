import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='md:flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 text-zinc-50'>
        <Link to="/" >
        <h1 className='w-full text-2xl font-semibold'>Verónica De León Hernández
            <span className='text-zinc-500 font-light'> analog</span>
        </h1>
        </Link>
        <ul className='flex'>
           <li className='whitespace-nowrap p-4'>
              <NavLink to="/about">About</NavLink>
           </li>
           <li className='whitespace-nowrap p-4'>
              <NavLink to="/contact">Get in touch</NavLink>
           </li>
        </ul>
    </div>
  )
}

export default Navbar