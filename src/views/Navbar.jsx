import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({ containerBig }) => {

   const activeLink = 'p-1 rounded-sm text-zinc-100  border-b-2'
   const normalLink = 'p-1 rounded-sm text-zinc-500 transition duration-150 ease-out hover:ease-in hover:text-zinc-100'

  return (

   <div className={containerBig}>
    <div className='md:flex justify-between items-center text-zinc-50 text-xl font-light mt-6 mb-12'>
        <Link to="/" >
        <h1 className='w-full font-semibold pb-4 md:pb-0'>Verónica De León Hernández
            <span className='text-zinc-500 font-light'> analog</span>
        </h1>
        </Link>
        <ul className='flex text-lg'>
           <li className='whitespace-nowrap pl-0 mr-5'>
              <NavLink 
                  to="/about"
                  className={({ isActive }) =>
                     isActive ? activeLink : normalLink
                   }>About</NavLink>
           </li>
           <li className='whitespace-nowrap pl-0'>
              <NavLink
                  to="/contact" 
                  className={({ isActive }) =>
                     isActive ? activeLink : normalLink
                   }>Get in touch</NavLink>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar