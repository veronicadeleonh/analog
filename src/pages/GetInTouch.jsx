import React from 'react'

const GetInTouch = ({containerSmall}) => {

  return (

    <div className={containerSmall}>
      <div className='font-light text-zinc-100 text-lg'>

            <div className='pb-8'>
              <img className='pb-2' src="/vdlh-coney-island.jpg" alt="Coney Island, NY - 2022" />
              <p className='text-right text-sm pb-4'>Coney Island, NY - 2022</p>
            </div>

            <h2 className='text-4xl font-semibold pb-6'>Let's connect!</h2>

            <p>I’m always excited to meet fellow female solo travelers and exchange stories, tips, and ideas about future destinations.</p>
            
            <div className='py-4'>
            <p className='font-medium italic p-2 rounded-sm w-fit transition-all duration-300 hover:bg-zinc-900 hover:translate-x-[4px]'>– Where do you want to travel next?</p>
            <p className='font-medium italic p-2 rounded-sm w-fit transition-all duration-300 hover:bg-zinc-900 hover:translate-x-[4px]'>– Which trip has been your favorite?</p>
            <p className='font-medium italic p-2 rounded-sm w-fit transition-all duration-300 hover:bg-zinc-900 hover:translate-x-[4px]'>– Would you visit the same place more than once?</p> 
            </div>
            <p>Let's talk! 🎒📸. I’d love to hear about your trips!</p>
            
            <div className='py-4'>
            <a className='mt-4 w-fit p-2 rounded-sm font-medium transition-all duration-300 hover:bg-zinc-200 hover:text-zinc-900 active:bg-zinc-100' href="mailto:hello@veronicadeleon.de">
              hello@veronicadeleon.de
            </a>
            </div>
      </div>
    </div>
  )
}

export default GetInTouch