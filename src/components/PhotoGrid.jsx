import React from 'react'
import { useState } from 'react'
import Overlays from './Overlays'

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

    const [openModal, setOpenModal] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    // close modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // open modal
    const handleOpenModal = (index) => {
        console.log('click')
        setSlideNumber(index)
        setOpenModal(true)
    } 

    // previous image
    const handlePrevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber(images.length -1) 
        : setSlideNumber(slideNumber - 1)
    }

    // next image
    const handleNextSlide = () => {
        slideNumber + 1 === images.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }


    console.log(images)

  return (
    <div className='max-w-[1240px] mx-auto'>

        <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 py-10 md:pz-20 gap-2'>
        {images.map((src, index) => (
                <div 
                    key={index} 
                    className='mb-2 break-inside-avoid'
                    onClick={() => handleOpenModal(index)}>
                  <img src={src} className='w-full object-cover rounded-sm cursor-pointer' />
                </div>  
            ))}
            
        </div>

        <Overlays openModal={openModal} images={images} closeModal={handleCloseModal} prevSlide={handlePrevSlide} nextSlide={handleNextSlide} slideNumber={slideNumber} />

    {/* {openModal 
    && <PhotoModal images={images} closeModal={handleCloseModal} prevSlide={handlePrevSlide} nextSlide={handleNextSlide} slideNumber={slideNumber} />}         */}

    </div>
  )
}

export default PhotoGrid