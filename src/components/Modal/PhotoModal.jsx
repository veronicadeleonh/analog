import React from 'react'
import { useState, useEffect } from "react";
import PhotoData from './PhotoData'
import SlideButtonPrev from './Buttons/SlideButtonPrev'
import SlideButtonNext from './Buttons/SlideButtonNext'
import SlideImage from './SlideImage'
import SlideButtonClose from './Buttons/SlideButtonClose'
import KeyInstructions from './KeyInstructions';

const PhotoModal = props => {

    const { slideNumber, closeModal, openModal, nextSlide, prevSlide, containerSmall, filteredItems, setSelectedFilter, setSelectedFilterBy } = props


    // const [showInstructions, setShowInstructions] = useState(
    // () => !localStorage.getItem('hasSeenInstructions')
    // );

    const [showInstructions, setShowInstructions] = useState(true);

    const handleFadeOut = () => {
    setShowInstructions(false);
    localStorage.setItem('hasSeenInstructions', 'true');
    };

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

        {showInstructions && (
        <KeyInstructions isVisible={showInstructions} onFadeOut={handleFadeOut} />
        )}

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