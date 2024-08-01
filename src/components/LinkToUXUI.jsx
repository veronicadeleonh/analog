import React from 'react'
import { Link } from 'react-router-dom'

const LinkToUXUI = () => {
  return (
    <div className='flex justify-between items-center max-w-[800px] mt-6 mx-auto font-light text-zinc-100 bg-zinc-900 p-4 rounded-sm'>

        <div>
          <p>When I am not travelling or planning trips around the world, I like to design and build interfaces.</p> 
          <p><span className='font-semibold'>Curious to see my work?</span> Check out my Product Designer UX/UI portfolio. </p>
        </div>

          <Link 
            to="https://veronicadeleonh.github.io" 
            target="_blank"
            className='bg-zinc-50 text-stone-700 font-semibold rounded-sm py-2 px-4 text-nowrap'
            >
            Let's go!
            </Link>
          
    </div>
  )
}

export default LinkToUXUI