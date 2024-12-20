import React from 'react'
import PhotoData from './PhotoData'
import SlideButtonPrev from './Buttons/SlideButtonPrev'
import SlideButtonNext from './Buttons/SlideButtonNext'
import SlideImage from './SlideImage'
import SlideButtonClose from './Buttons/SlideButtonClose'

const PhotoModal = props => {

    const { slideNumber, closeModal, nextSlide, prevSlide, containerSmall, filteredItems, setSelectedFilter, setSelectedFilterBy } = props

    return (

        <div className='
                fixed 
                top-[50%] 
                left-[50%] 
                w-screen 
                h-screen 
                translate-x-[-50%] 
                translate-y-[-50%] 
                sm:p-8 
                p-2 
                z-10 
                bg-[#09090bec]'>
        
        <SlideButtonClose closeModal={closeModal} />

        <div className='lg:h-[90%] h-[80%] mt-6 sm:mt-0 flex items-center justify-between'>
            <SlideButtonPrev prevSlide={prevSlide} />
            <SlideImage filteredItems={filteredItems} slideNumber={slideNumber} />
            <SlideButtonNext nextSlide={nextSlide} />
        </div>


            <div className={containerSmall}>
                <div className='font-light'>
                    <PhotoData filteredItems={filteredItems} slideNumber={slideNumber} setSelectedFilter={setSelectedFilter} setSelectedFilterBy={setSelectedFilterBy} closeModal={closeModal} />
                </div>
            </div>
        </div>

  )
}

export default PhotoModal