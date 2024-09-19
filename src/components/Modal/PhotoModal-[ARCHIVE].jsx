import React from 'react'
import PhotoData from './PhotoData'
import ModalNav from './ModalNav'
import SlideButtonClose from './Buttons/SlideButtonClose'

const PhotoModal = props => {

    const { slideNumber, closeModal, nextSlide, prevSlide, randomSlide, containerSmall, filteredItems } = props

    return (

        <div className='
                fixed 
                top-[50%] 
                left-[50%] 
                w-screen 
                h-screen 
                translate-x-[-50%] 
                translate-y-[-50%] 
                md:p-8 
                p-2 
                z-10 
                bg-[#09090bec]'>

            <SlideButtonClose closeModal={closeModal}/ >

            <div className='md:h-[90%] h-[78%]'>
                <div className='h-[calc(100%-40px)] pt-6 mt-6 px-2 flex items-center justify-center'>
                    <img 
                        className='max-w-full max-h-full pointer-events-none select-none' 
                        src={filteredItems[slideNumber].image.fields.file.url}
                        alt={filteredItems[slideNumber].image.fields.title} />
                </div>             
            </div>


            <div className={containerSmall}>
                <div className='font-light flex justify-between sm:flex-row flex-col gap-2'>
                    <PhotoData filteredItems={filteredItems} slideNumber={slideNumber} />
                    <ModalNav nextSlide={nextSlide} prevSlide={prevSlide} randomSlide={randomSlide} />
                </div>
            </div>
        </div>

  )
}

export default PhotoModal