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

            <p className='pb-4'>I’m always excited to meet fellow female solo travelers and exchange stories, tips, and ideas about future destinations. <span className='font-semibold italic'>Where do you want to travel next? Which trip has been your favorite? Would you visit the same place more than once?</span> Let's talk! 🎒📸.
</p>
            <p className='pb-4'>You can reach out to me via email, I’d love to hear about your trips!</p>
            
            <a className='mt-4 w-fit p-2 rounded-sm font-medium transition-all duration-150 hover:bg-zinc-200 hover:text-zinc-900 active:bg-zinc-100' href="mailto:hello@veronicadeleon.de">
              hello@veronicadeleon.de
            </a>
      </div>
    </div>
  )
}

export default GetInTouch