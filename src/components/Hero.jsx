import React from 'react'

const Hero = ({containerSmall}) => {


  return (

    <div className={containerSmall}>
        <div className='mt-14 md:mt-6 font-light text-2xl text-zinc-100 pb-12'>
        <p className='pb-4'>Hi, I'm <span className='font-bold'>Verónica</span>, a Berlin bases <span className='font-bold'>analog photography enthusiast</span> and 
          <span className='font-bold'> female solo traveler</span>. On this site, you'll find snapshots from my backpacking adventures over the years ✌🏽🗺️.</p>
        </div>
      </div>
  )
}

export default Hero