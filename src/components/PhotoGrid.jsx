import { useState } from 'react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleChevronLeft, 
    faCircleChevronRight, 
    faCircleXmark 
} from '@fortawesome/free-solid-svg-icons'


const images = [
    '/img-landscape.jpg',
    '/img-portrait.jpg',
    '/img-landscape.jpg',
    '/img-portrait.jpg',
    '/img-portrait.jpg',
    '/img-landscape.jpg',
    '/img-landscape.jpg',
]

const PhotoGrid = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    } 

    // close modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // previous image
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber(images.length -1) 
        : setSlideNumber(slideNumber - 1)
    }

    // next image
    const nextSlide = () => {
        slideNumber + 1 === images.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }

  return (
    <div>

        Current slide number {slideNumber} <br></br>
        Total slides {images.length}

    {openModal &&
        <div className='fixed m-0 z-50 bg-[#282c34] flex items-center justify-start w-full h-full'>
            <FontAwesomeIcon icon={faCircleXmark} className='buttonClose' onClick={handleCloseModal}/>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='buttonPrev' onClick={prevSlide}/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='buttonNext' onClick={nextSlide}/>
            
            <div className='w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center'>
                <img className='max-w-full max-h-full pointer-events-none select-none' src={images[slideNumber]} />
            </div>

        </div>
    }

    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:pz-20 gap-2'>
        {images.map((src, index) => (
                <div 
                    key={index} 
                    className='mb-4 break-inside-avoid'
                    onClick={() => handleOpenModal(index)}>
                  <img src={src} className='w-full object-cover rounded-sm' />
                </div>  
            ))}
    </div>
    </div>
  )
}

export default PhotoGrid