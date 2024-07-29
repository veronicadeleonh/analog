import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-neutral-400 text-center p-5'>
        <p>© 2024 <Link to="/" className='font-semibold'>Verónica De León Hernández</Link></p>
        <p>Coded with ❤️</p>
    </div>
  )
}

export default Footer