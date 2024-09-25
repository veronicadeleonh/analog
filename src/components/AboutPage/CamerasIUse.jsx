import React from 'react'

const CamerasIUse = () => {

  let cameras = [
    {name:'Canonet QL17 III', type:'Rangefinder', size:'35mm', image:'/cameras/camera-canonet.svg'},
    {name:'Mamiya 645', type:'SRL', size:'120mm', image:'/cameras/camera-mamiya.svg'},
    {name:'Olympus Pen', type:'Point-n-shoot', size:'35mm', image:'/cameras/camera-olympus.svg'},
    {name:'Canon Prima AS-1', type:'Fully automatic', size:'35mm', image:'/cameras/camera-as-1.svg'},
  ]

  return (
    <div>
        <h2 className='text-2xl font-semibold pb-2'>Cameras I use</h2>
        <p className='pb-6'>I mostly travel with a small format camera, being the Canonet my favourite one. Depending on the destination and duration of the trip, I also like to bring a second or third camera with me: The waterproof and the halfframe cameras are very fun to have.</p>

        <div className='sm:grid sm:grid-cols-2 gap-2 pb-12 mx-[-16px]'>
          {cameras.map((camera) => (
            <div className='flex gap-3 items-center py-3 px-4 rounded-sm transition-all duration-150 hover:bg-zinc-900'>
              <img src={camera.image} className='rounded-sm transition-all duration-300 hover:translate-y-[-4px]' />
              <div>
                <p className='font-bold'>{camera.name}</p>
                <p className='text-zinc-500'>{camera.type}, {camera.size}</p>
              </div>
            </div>
        ))}
        </div>

    </div>
  )
}

export default CamerasIUse