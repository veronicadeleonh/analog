import React from 'react'
import { useState } from 'react'
import PhotoModal from './PhotoModal'


const PhotoGrid = props => {

    const { images } = props
    
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
    const prevSlide = () => {
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
    <div>

    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:pz-20 gap-2'>
        {images.map((src, index) => (
                <div 
                    key={index} 
                    className='mb-2 break-inside-avoid'
                    onClick={() => handleOpenModal(index)}>
                  <img src={src} className='w-full object-cover rounded-sm' />
                </div>  
            ))}
            
    </div>

    {openModal &&
        <PhotoModal images={images} closeModal={handleCloseModal} prevSlide={prevSlide} nextSlide={handleNextSlide} slideNumber={slideNumber} />}

    </div>
  )
}

export default PhotoGrid