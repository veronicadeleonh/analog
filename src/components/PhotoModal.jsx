import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircleXmark 
} from '@fortawesome/free-solid-svg-icons'
import PhotoData from './PhotoData'
import ModalNav from './ModalNav'

const PhotoModal = ({ images, closeModal, nextSlide, prevSlide, slideNumber, containerSmall, containerBig }) => {

  return (

        <div className='fixed top-[50%] left-[50%] w-screen h-screen translate-x-[-50%] translate-y-[-50%]  p-8 z-10 rounded- bg-[#000300ec]'>

            {/* <FontAwesomeIcon icon={faCircleXmark} className='text-zinc-500 hover:text-zinc-50 absolute top-6 right-6 cursor-pointer' onClick={closeModal}/> */}
            <div className='text-zinc-500 hover:text-zinc-50 absolute top-6 right-6 cursor-pointer' onClick={closeModal}>
                <img src="icons/close.svg" />
            </div>

            <div className='h-[90%]'>
                <div className='h-[calc(100%-40px)] pt-6 flex items-center justify-center'>
                    <img className='max-w-full max-h-full pointer-events-none select-none' src={images[slideNumber]} />
                </div>
            </div>


            <div className={containerSmall}>
                <div className='font-light flex justify-between'>
                    <PhotoData />
                    <ModalNav nextSlide={nextSlide} prevSlide={prevSlide} />
                </div>

            </div>
            

        </div>

  )
}

export default PhotoModal