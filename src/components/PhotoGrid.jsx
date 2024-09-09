import React, { useState } from 'react'
import Overlays from './Overlays'

const PhotoGrid = ({ containerSmall, containerBig, filteredItems }) => {

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
        ? setSlideNumber(filteredItems.length -1) 
        : setSlideNumber(slideNumber - 1)
    }

    const handleKeyPress = (e) => {
		if (e.key === 'ArrowLeft') {
			console.log(`Do left action`);
		} else if (e.key === 'ArrowRight') {
			console.log(`Do right action`);
		}
    }

    // next image
    const handleNextSlide = () => {
        slideNumber + 1 === filteredItems.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }

    const handleRamdonSlide = () => setSlideNumber(Math.floor(Math.random() * filteredItems.length))


  return (
    <div className={containerBig}>

        <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-3 py-0 gap-2'>
            {filteredItems.map((photo, index) => (
                <div 
                    key={photo.image.sys.id} 
                    className='mb-2 break-inside-avoid transition-all duration-300 hover:translate-y-[-4px]'
                    onClick={() => handleOpenModal(index)}>
                    
                  <img 
                    src={photo.image.fields.file.url} 
                    className='w-full object-cover rounded-sm cursor-pointer' 
                    alt={photo.caption}
                    />
                </div>   
            ))}
            
        </div>

        <Overlays 
          openModal={openModal} 
          filteredItems={filteredItems} 
          closeModal={handleCloseModal} 
          prevSlide={handlePrevSlide} 
          nextSlide={handleNextSlide}
          randomSlide={handleRamdonSlide}
          keyPress={handleKeyPress} 
          slideNumber={slideNumber} 
          containerSmall={containerSmall} 
          containerBig={containerBig}
          />


    </div>
  )
}

export default PhotoGrid