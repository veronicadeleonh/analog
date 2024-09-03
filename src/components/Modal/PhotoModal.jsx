import React from 'react'
import PhotoData from './PhotoData'
import ModalNav from './ModalNav'

const PhotoModal = props => {

    const { slideNumber, closeModal, nextSlide, prevSlide, containerSmall, filteredItems } = props

    return (

        <div className='fixed top-[50%] left-[50%] w-screen h-screen translate-x-[-50%] translate-y-[-50%] p-8 z-10 rounded- bg-[#000300ec]'>

            <div className='text-zinc-600 absolute top-6 right-6 cursor-pointer w-8 h-8
                            hover:text-zinc-50 
                            before:translate-y-[-50%] before:translate-x-[-50%] before:rotate-[-45deg] before:transition-all before:ease-out before:duration-75
                            after:translate-y-[-50%] after:translate-x-[-50%] after:rotate-[45deg] after:transition-all after:ease-out after:duration-75
                            hover:before:translate-y-[-50%] hover:before:translate-x-[-50%] hover:before:rotate-[135deg]
                            after:before:translate-y-[-50%] after:before:translate-x-[-50%] after:before:rotate-[225deg]' onClick={closeModal}>
                <svg className="w-8 h-8 fill-zinc-500 transition-all duration-150 hover:fill-zinc-50 focus:fill-zinc-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2427 7.75737C16.6332 8.1479 16.6332 8.78106 16.2427 9.17158L13.4142 12L16.2427 14.8284C16.6332 15.219 16.6332 15.8521 16.2427 16.2427C15.8521 16.6332 15.219 16.6332 14.8284 16.2427L12 13.4142L9.17158 16.2427C8.78106 16.6332 8.1479 16.6332 7.75737 16.2427C7.36685 15.8521 7.36685 15.219 7.75737 14.8284L10.5858 12L7.75737 9.17159C7.36685 8.78106 7.36685 8.1479 7.75737 7.75737C8.14789 7.36685 8.78106 7.36685 9.17158 7.75737L12 10.5858L14.8284 7.75737C15.219 7.36685 15.8521 7.36685 16.2427 7.75737Z" />
                </svg>
            </div>

            <div className='h-[90%]'>
                <div className='h-[calc(100%-40px)] pt-6 flex items-center justify-center'>
                    <img 
                        className='max-w-full max-h-full pointer-events-none select-none' 
                        src={filteredItems[slideNumber].image.fields.file.url} />
                        alt={filteredItems[slideNumber].caption}
                </div>
            </div>


            <div className={containerSmall}>
                <div className='font-light flex justify-between'>
                    <PhotoData filteredItems={filteredItems} slideNumber={slideNumber} />
                    <ModalNav nextSlide={nextSlide} prevSlide={prevSlide} />
                </div>

            </div>
            

        </div>

  )
}

export default PhotoModal