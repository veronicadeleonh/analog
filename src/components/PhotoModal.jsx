import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleChevronLeft, 
    faCircleChevronRight, 
    faCircleXmark 
} from '@fortawesome/free-solid-svg-icons'

const PhotoModal = ({ images, closeModal, nextSlide, prevSlide, slideNumber }) => {

  return (
    <div>

        <div className='m-0 z-50 bg-[#282c34] flex items-center justify-start w-full h-full'>
            <FontAwesomeIcon icon={faCircleXmark} className='buttonClose' onClick={closeModal}/>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='buttonPrev' onClick={prevSlide}/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='buttonNext' onClick={nextSlide}/>
            
            <div className='w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center'>
                <img className='max-w-full max-h-full pointer-events-none select-none' src={images[slideNumber]} />
            </div>

        </div>

    </div>
  )
}

export default PhotoModal