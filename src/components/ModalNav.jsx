import React from 'react'

const ModalNav = props => {

    const { prevSlide, nextSlide } = props

  return (
    <div className='flex row gap-2'>
      <div className=' hover:text-zinc-100 focus:text-zinc-50 cursor-pointer w-8 h-8' onClick={prevSlide}>
          <img className="w-8 h-8" src="icons/arrow-left.svg" />
        </div>
      <div className=' hover:text-zinc-100 focus:text-zinc-50 cursor-pointer w-8 h-8' onClick={nextSlide}>
          <img className="w-8 h-8" src="icons/arrow-right.svg" />
      </div>
    </div>
  )
}

export default ModalNav