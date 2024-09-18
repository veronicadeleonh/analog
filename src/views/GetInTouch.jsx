import React from 'react'

const GetInTouch = ({containerSmall}) => {

  return (

    <div className={containerSmall}>
      <div className='font-light text-zinc-100'>

            <div className='pb-8'>
              <img className='pb-2' src="/vdlh-coney-island.jpg" alt="Coney Island, NY - 2022" />
              <p className='text-right text-sm pb-4'>Coney Island, NY - 2022</p>
            </div>

            <h2 className='text-4xl font-semibold pb-4'>Let's connect!</h2>

            <p className='pb-4'>I’m always excited to meet fellow female solo travelers and exchange stories, tips, and ideas about future destinations. <span className='font-semibold italic'>Where do you want to travel next? Which trip has been your favorite? Would you visit the same place more than once?</span> Let's talk! 🎒📸.
</p>
            <p className='pb-4'>You can reach out to me via email or connect with me online. I’d love to hear about your trips!</p>

            <a className='font-semibold' href="mailto:hello@veronicadeleon.de">hello@veronicadeleon.de</a>
      </div>
    </div>
  )
}

export default GetInTouch