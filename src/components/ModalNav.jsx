import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleChevronLeft, 
    faCircleChevronRight, 
} from '@fortawesome/free-solid-svg-icons'

const ModalNav = props => {

    const { prevSlide, nextSlide } = props

  return (
    <div>
        <FontAwesomeIcon icon={faCircleChevronLeft} className='buttonPrev' onClick={prevSlide}/>
        <FontAwesomeIcon icon={faCircleChevronRight} className='buttonNext' onClick={nextSlide}/>
    </div>
  )
}

export default ModalNav