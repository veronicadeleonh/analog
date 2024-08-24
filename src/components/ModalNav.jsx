import React from 'react'


const ModalNav = props => {

    const { prevSlide, nextSlide } = props

  return (
    <div className='flex row gap-1 text-xl text-zinc-500'>
      <div className='buttonPrev hover:text-zinc-100 focus:text-zinc-50 cursor-pointer w-8 h-8' onClick={prevSlide}>
          <img className="w-8 h-8" src="icons/arrow-left.svg" />
        </div>
      <div className='buttonNext hover:text-zinc-100 focus:text-zinc-50 cursor-pointer w-8 h-8' onClick={nextSlide}>
          <img className="w-8 h-8" src="icons/arrow-right.svg" />
      </div>
      {/*   <FontAwesomeIcon icon={faCircleChevronLeft} className='buttonPrev hover:text-zinc-100 focus:text-zinc-50 cursor-pointer' onClick={prevSlide}/>
        <FontAwesomeIcon icon={faCircleChevronRight} className='buttonNext hover:text-zinc-100 focus:text-zinc-50 cursor-pointer' onClick={nextSlide}/> */}
    </div>
  )
}

export default ModalNav