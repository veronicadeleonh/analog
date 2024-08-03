import React from 'react'
import { Link } from 'react-router-dom'

const LinkToUXUI = () => {
  return (
    <div className='flex justify-between items-center max-w-[800px] mt-6 mx-auto font-light text-zinc-100 bg-zinc-900 p-4 rounded-sm'>

        <div>
          <p><span className='font-semibold'>Curios to see my work?</span> Check out my Product Designer portfolio</p>
        </div>

          <Link 
            to="https://veronicadeleonh.github.io" 
            target="_blank"
            className='bg-zinc-50 text-stone-700 font-normal rounded-sm py-2 px-4 text-nowrap flex gap-2'
            >
            Let's go! 
            <img src='/icons/arrow-right.svg' className='transition-all duration-150 hover:translate-x-[4px]'/>
            </Link>
          
    </div>
  )
}

export default LinkToUXUI