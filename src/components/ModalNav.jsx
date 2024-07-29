import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleChevronLeft, 
    faCircleChevronRight, 
} from '@fortawesome/free-solid-svg-icons'

const ModalNav = props => {

    const { prevSlide, nextSlide } = props

  return (
    <div className='flex row gap-1 text-xl text-zinc-500'>
        <FontAwesomeIcon icon={faCircleChevronLeft} className='buttonPrev hover:text-zinc-100 focus:text-zinc-50' onClick={prevSlide}/>
        <FontAwesomeIcon icon={faCircleChevronRight} className='buttonNext hover:text-zinc-100 focus:text-zinc-50' onClick={nextSlide}/>
    </div>
  )
}

export default ModalNav