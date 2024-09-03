import React from 'react'

const Hero = ({containerSmall}) => {


  return (

    <div className={containerSmall}>
        <div className='mt-14 md:mt-6 font-light text-2xl text-zinc-100 pb-12'>
        I'm <span className='font-semibold'>Verónica</span>, an <span className='font-semibold'>analog photography enthusiast</span> and <span className='font-semibold'>female solo traveler</span> based in Berlin. Here are some of snaps from my backpacking adventures ✌🏽🗺️.
        </div>
      </div>
  )
}

export default Hero