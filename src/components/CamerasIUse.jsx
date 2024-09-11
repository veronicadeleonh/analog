import React from 'react'

const CamerasIUse = ({ containterSmall }) => {

  let cameras = [
    {name:'Canonet QL17 III', type:'Rangefinder', size:'35mm'},
    {name:'Mamiya 645', type:'SRL', size:'120mm'},
    {name:'Olympus Pen', type:'SRL', size:'35mm'},
    {name:'Canon AS', type:'SRL', size:'135mm'},
  ]

  return (
    <div className={containterSmall}>
        <h2 className='text-2xl font-semibold text-zinc-100 pb-6'>Cameras I use</h2>

        <div className='flex gap-2'>
          {cameras.map((camera) => (
            <div className='w-[75%] font-light text-l text-zinc-100 py-2 px-3 rounded-sm transition-all duration-150 hover:bg-zinc-900'>
            <p className='font-bold'>{camera.name}</p>
            <p>{camera.type}, {camera.size}</p>
            </div>
        ))}
        </div>

    </div>
  )
}

export default CamerasIUse