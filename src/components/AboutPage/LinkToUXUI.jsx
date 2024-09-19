import React from 'react'
import { Link } from 'react-router-dom'

const LinkToUXUI = ({ containerSmall }) => {

  return (

    <div className={containerSmall}>

        <div className='pb-6'>
          <h2 className='text-2xl font-semibold pb-2'>Other Web</h2>
          <p>When I'm not traveling or planning a new adventure, I enjoy designing and building interfaces.</p>
        </div>

        <div className='flex flex-col gap-4 sm:flex-row sm:items-center items-center bg-zinc-900 p-4 rounded-sm'>
              <img className="sm:max-w-xs rounded-sm transition-all duration-300 hover:translate-y-[-4px]" src="/portfolio-web-preview.png" />
              <div className='w-full'>
                  <div className='pb-4'>
                  <p><span className='font-semibold'>Curious to see my work? </span>
                   Check out my Product Design UX/UI portfolio</p>
                  </div>

                  <Link 
                    to="https://veronicadeleonh.github.io" 
                    target="_blank"
                    className='group text-zinc-900 bg-zinc-100 hover:bg-zinc-50 font-normal underline underline-offset-2 rounded-sm py-2 px-4 text-nowrap flex gap-2 transition-all w-full sm:w-auto justify-center mt-4 sm:mt-0'
                    >
                    Let's go! 
                    <img src='/icons/arrow-right-black.svg' className='group-hover:translate-x-[4px] duration-150' alt="Arrow Right" />
                  </Link>
          </div>
        </div>
    </div>
  )
}

export default LinkToUXUI