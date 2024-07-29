import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleXmark 
} from '@fortawesome/free-solid-svg-icons'
import PhotoData from './PhotoData'
import ModalNav from './ModalNav'

const PhotoModal = ({ images, closeModal, nextSlide, prevSlide, slideNumber }) => {

  return (

        <div className='fixed top-0 left-0 z-10 w-screen h-screen p-8 bg-[#020202]'>

            <FontAwesomeIcon icon={faCircleXmark} className='text-zinc-500 hover:text-zinc-50 absolute top-6 right-6' onClick={closeModal}/>
   
            <div className='w-[calc(100%-50px)] h-[calc(100%-80px)] pt-6 pb-6 flex items-center justify-center'>
                    <img className='max-w-full max-h-full pointer-events-none select-none' src={images[slideNumber]} />
            </div>

            <div className='max-w-[800px] mx-auto font-light flex justify-between'>
                <PhotoData />
                <ModalNav nextSlide={nextSlide} prevSlide={prevSlide} />
            </div>

        </div>

  )
}

export default PhotoModal