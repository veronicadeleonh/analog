import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({containerSmall}) => {


  return (

    <div className={containerSmall}>
      <div className='pb-14'>
        <div className='font-light text-2xl text-zinc-100 pb-4'>
        <p>I'm <span className='font-semibold'>Verónica</span>, a Berlin based <span className='font-semibold'>analog photography enthusiast</span> and 
          <span className='font-semibold'> female solo traveler</span>. Here I've collected snaps from my backpacking adventures over the years 🎒📸✌🏽🗺️.
            </p> 
        </div>

        <div className='flex justify-end'>
        <Link 
          to="/about" 
          target="_self"
          className='group text-l text-zinc-500 fill-zinc-500 hover:text-zinc-100 underline underline-offset-2 text-nowrap flex items-center gap-2 transition-all w-fit'
          >
          Read more
          <svg width="24" height="24" viewBox="0 0 24 24" className='group-hover:translate-x-[4px] group-hover:fill-zinc-100 transition-all duration-150' xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z"/>
          </svg>
        </Link>
        </div>
      </div>
      </div>
  )
}

export default Hero