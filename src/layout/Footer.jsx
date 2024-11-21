import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-zinc-500 text-center text-sm p-5 mt-12 mb-12'>
        <p>© 2024 <Link to="/" className='font-semibold'>Verónica De León Hernández</Link></p>
        <p>Coded with ❤️</p>
    </div>
  )
}

export default Footer