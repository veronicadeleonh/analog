import React from 'react'
import PhotoData from './PhotoData'
import ModalNav from './ModalNav'

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

            <div className='
                text-zinc-600 
                absolute 
                md:top-6 
                md:right-6 
                top-2 
                right-2 
                cursor-pointer 
                w-8 
                h-8 
                hover:text-zinc-50' 
                onClick={closeModal}
                >
                <svg className="
                w-8 h-8 
                fill-zinc-500 
                transition-all 
                duration-150 
                hover:fill-zinc-50 
                focus:fill-zinc-50" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2427 7.75737C16.6332 8.1479 16.6332 8.78106 16.2427 9.17158L13.4142 12L16.2427 14.8284C16.6332 15.219 16.6332 15.8521 16.2427 16.2427C15.8521 16.6332 15.219 16.6332 14.8284 16.2427L12 13.4142L9.17158 16.2427C8.78106 16.6332 8.1479 16.6332 7.75737 16.2427C7.36685 15.8521 7.36685 15.219 7.75737 14.8284L10.5858 12L7.75737 9.17159C7.36685 8.78106 7.36685 8.1479 7.75737 7.75737C8.14789 7.36685 8.78106 7.36685 9.17158 7.75737L12 10.5858L14.8284 7.75737C15.219 7.36685 15.8521 7.36685 16.2427 7.75737Z" />
                </svg>
            </div>


            <div className='md:h-[90%] h-[78%]'>
                <div className='h-[calc(100%-40px)] pt-6 mt-6 px-2 flex items-center justify-center'>
                    <img 
                        className='max-w-full max-h-full pointer-events-none select-none' 
                        src={filteredItems[slideNumber].image.fields.file.url}
                        alt={filteredItems[slideNumber].image.fields.title} />
                </div>             
            </div>


            <div className={containerSmall}>
                <div className='font-light flex justify-between sm:flex-row flex-col gap-2 '>
                    <PhotoData filteredItems={filteredItems} slideNumber={slideNumber} />
                    <ModalNav nextSlide={nextSlide} prevSlide={prevSlide} randomSlide={randomSlide} />
                </div>
            </div>
        </div>

  )
}

export default PhotoModal