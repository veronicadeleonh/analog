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
            
            <a className='mt-4 group flex gap-2 items-center w-fit p-2 rounded-sm font-medium transition-all duration-150 hover:bg-zinc-200 hover:text-zinc-900 active:bg-zinc-100' href="mailto:hello@veronicadeleon.de">
              <svg  className='fill-zinc-800 transition-all duration-150 group-hover:fill-indigo-500 active:fill-indigo-400' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m3.25026 5.69244c.91472-1.03637 2.25623-1.69244 3.74974-1.69244h10c1.2674 0 2.4267.47284 3.3076 1.25026 1.0363.91472 1.6924 2.25623 1.6924 3.74974v6c0 2.7614-2.2386 5-5 5h-10c-2.76142 0-5-2.2386-5-5v-6c0-1.26737.47284-2.42675 1.25026-3.30756zm2.32226.66803 6.39558 5.31293 6.0166-5.50835c-.3083-.107-.6395-.16505-.9847-.16505h-10c-.51688 0-1.0029.1303-1.42748.36047zm13.98738 1.07402-6.8846 6.30311c-.3687.3375-.9299.351-1.3143.0316l-7.13101-5.92392c-.14826.35523-.22999.74508-.22999 1.15472v6c0 1.6569 1.34315 3 3 3h10c1.6569 0 3-1.3431 3-3v-6c0-.57381-.1606-1.1096-.4401-1.56551z" fillRule="evenodd"/></svg>
              hello@veronicadeleon.de
            </a>
      </div>
    </div>
  )
}

export default GetInTouch