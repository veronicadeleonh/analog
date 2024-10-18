import React, { useState, useEffect } from 'react'
import Overlays from '../Modal/Overlays'

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

    // next image
    const handleNextSlide = () => {
        slideNumber + 1 === filteredItems.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }

    // keyboard prev/next image
    const handleKeyPress = (e) => {
		if (e.key === 'ArrowLeft') {
			handlePrevSlide();
		} else if (e.key === 'ArrowRight') {
			handleNextSlide();
		} else if (e.key === 'Escape')
            handleCloseModal()
    }


    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress, true)
      return () => {
      document.removeEventListener('keydown', handleKeyPress, true);
    };
    }, [handleKeyPress])


    // // randomize slides
    // const handleRamdonSlide = () => setSlideNumber(Math.floor(Math.random() * filteredItems.length))

  console.log(filteredItems.length, "filteredItems")

  return (
    <div className={containerBig}>
      
      { filteredItems.length > 120 ?
        (<div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-3 py-0 gap-2'>
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
            
        </div> ) : null }

        <Overlays 
          openModal={openModal} 
          filteredItems={filteredItems} 
          closeModal={handleCloseModal} 
          prevSlide={handlePrevSlide} 
          nextSlide={handleNextSlide}
          slideNumber={slideNumber} 
          containerSmall={containerSmall} 
          containerBig={containerBig}
          />


    </div>
  )
}

export default PhotoGrid