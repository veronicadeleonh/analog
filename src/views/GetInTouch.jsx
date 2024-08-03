import React from 'react'

const GetInTouch = ({containerSmall}) => {

  return (

    <div className={containerSmall}>
      <div className='font-light text-zinc-100'>

            <div className='pb-8'>
              <img className='pb-2' src="/vdlh-coney-island.jpg" />
              <p className='text-right text-sm pb-4'>Coney Island, NY - 2022</p>
            </div>

            <h2 className='text-3xl font-semibold pb-4'>Let's connect!</h2>

            <p className='pb-4'>You can reach me via email or connect with me on the web.</p>

            <a className='font-semibold' href="mailto:hello@veronicadeleon.de">hello@veronicadeleon.de</a>
      </div>
    </div>
  )
}

export default GetInTouch