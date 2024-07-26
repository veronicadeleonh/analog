import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleChevronLeft, 
    faCircleChevronRight, 
    faCircleXmark 
} from '@fortawesome/free-solid-svg-icons'

const PhotoModal = ({ images, closeModal, nextSlide, prevSlide, slideNumber }) => {

  return (

        <div className='fixed top-0 left-0 z-10 w-screen h-screen flex items-center justify-start  bg-[#020202f2]'>

            <div>
            <FontAwesomeIcon icon={faCircleXmark} className='buttonClose text-white' onClick={closeModal}/>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='buttonPrev text-white' onClick={prevSlide}/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='buttonNext text-white' onClick={nextSlide}/>
            </div>
            
            <div className='w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center'>
                <img className='max-w-full max-h-full pointer-events-none select-none' src={images[slideNumber]} />
            </div>

            <div>
                <p className='text-white'>City</p>
                <p className='text-white'>Country, Year</p>
                <p className='text-white'>Caption</p>

            </div>

        </div>

  )
}

export default PhotoModal