import React, { useState } from 'react'
import Overlays from './Overlays'


const PhotoGrid = ({containerSmall, containerBig, photos }) => {

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
        ? setSlideNumber(photos.length -1) 
        : setSlideNumber(slideNumber - 1)
    }

    // next image
    const handleNextSlide = () => {
        slideNumber + 1 === photos.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }


  return (
    <div className={containerBig}>

        <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-3 py-10 gap-2'>
            {photos.map((photo, index) => (
                <div 
                    key={index} 
                    className='mb-2 break-inside-avoid transition-all duration-300 hover:translate-y-[-4px]'
                    onClick={() => handleOpenModal(index)}>
                    
                  <img 
                    src={photo.image.fields.file.url} 
                    className='w-full object-cover rounded-sm cursor-pointer' 
                    />
                </div>   
            ))}
            
        </div>

        <Overlays 
          openModal={openModal} 
          photos={photos} 
          closeModal={handleCloseModal} 
          prevSlide={handlePrevSlide} 
          nextSlide={handleNextSlide} 
          slideNumber={slideNumber} 
          containerSmall={containerSmall} 
          containerBig={containerBig} />


    </div>
  )
}

export default PhotoGrid