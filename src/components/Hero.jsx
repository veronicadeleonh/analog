import React from 'react'

const Hero = ({containerSmall}) => {


  return (

    <div className={containerSmall}>
        <div className='mt-14 md:mt-6 font-light text-2xl text-zinc-100 pb-12'>
        <p className='pb-4'>I'm <span className='font-semibold'>Verónica</span>, a Berlin based <span className='font-semibold'>analog photography enthusiast</span> and 
          <span className='font-semibold'> female solo traveler</span>. Here I've collected snaps from my backpacking adventures over the years 🎒📸✌🏽🗺️.</p>
        </div>
      </div>
  )
}

export default Hero