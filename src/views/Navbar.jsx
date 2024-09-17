import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({containerBig}) => {

   const activeLink = 'text-zinc-50'
   const normalLink = 'text-zinc-500 transition duration-150 ease-out hover:ease-in hover:text-zinc-50'

  return (

   <div className={containerBig}>
    <div className='md:flex justify-between items-center h-24 text-zinc-50 text-xl font-light'>
        <Link to="/analog" >
        <h1 className='w-full font-semibold pb-6 md:pb-0'>Verónica De León Hernández
            <span className='text-zinc-500 font-light'> analog</span>
        </h1>
        </Link>
        <ul className='flex text-lg'>
           <li className='whitespace-nowrap pl-0 mr-6'>
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