import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleChevronLeft, 
    faCircleChevronRight, 
    faCircleXmark 
} from '@fortawesome/free-solid-svg-icons'
import PhotoData from './PhotoData'
import ModalNav from './ModalNav'

const PhotoModal = ({ images, closeModal, nextSlide, prevSlide, slideNumber }) => {

  return (

        <div className='fixed top-0 left-0 z-10 w-screen h-screen p-4 bg-[#020202f2]'>

            <FontAwesomeIcon icon={faCircleXmark} className='buttonClose text-zinc-50 absolute top-3 right-3' onClick={closeModal}/>
        
            <div className='w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center'>
                    <img className='max-w-full max-h-full pointer-events-none select-none' src={images[slideNumber]} />
            </div>

            <div className='flex justify-between text-zinc-50'>
                <PhotoData />
                <ModalNav nextSlide={nextSlide} prevSlide={prevSlide} />
            </div>

        </div>

  )
}

export default PhotoModal