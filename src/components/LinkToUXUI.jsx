import React from 'react'
import { Link } from 'react-router-dom'

const LinkToUXUI = () => {
  return (
    <div className='flex justify-between items-center max-w-[800px] mt-6 mx-auto font-light text-zinc-100 bg-zinc-900 p-4 rounded-sm'>

        <div>
          <p><span className='font-semibold'>Curious to see my work?</span> Check out my Product Design UX/UI portfolio</p>
        </div>

          <Link 
            to="https://veronicadeleonh.github.io" 
            target="_blank"
            className='group bg-zinc-50 text-zinc-900 font-normal underline underline-offset-2 rounded-sm py-2 px-4 text-nowrap flex gap-2 transition-all'
            >
            Let's go! 
            <img src='/icons/arrow-right-black.svg' className='group-hover:translate-x-[4px] duration-150' alt="Arrow Right" />
            </Link>
          
    </div>
  )
}

export default LinkToUXUI