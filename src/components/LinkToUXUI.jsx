import React from 'react'
import { Link } from 'react-router-dom'

const LinkToUXUI = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center items-center max-w-[800px] mt-6 mx-auto font-light text-zinc-100 bg-zinc-900 p-4 rounded-sm'>
          
          <img className="sm:max-w-96 rounded-sm" src="/portfolio-web-preview.png" />
          
          <div className='w-full'>
              <div className='pb-4'>
              <p className='font-bold'>Curious to see my work?</p>
              <p>Check out my Product Design UX/UI portfolio</p>
              </div>

              <Link 
                to="https://veronicadeleonh.github.io" 
                target="_blank"
                className='group bg-zinc-50 text-zinc-900 font-normal underline underline-offset-2 rounded-sm py-2 px-4 text-nowrap flex gap-2 transition-all w-full sm:w-auto justify-center mt-4 sm:mt-0'
                >
                Let's go! 
                <img src='/icons/arrow-right-black.svg' className='group-hover:translate-x-[4px] duration-150' alt="Arrow Right" />
              </Link>
          </div>
          
    </div>
  )
}

export default LinkToUXUI