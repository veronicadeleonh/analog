import React from 'react'
import { createPortal } from 'react-dom'
import PhotoModal from './PhotoModal'

const mountElement = document.getElementById("overlays")

const Overlays = props => {

const { images, openModal, closeModal, prevSlide, nextSlide, slideNumber, containerSmall, containerBig } = props

  return (
    createPortal(
      <>{openModal && 
          <PhotoModal 
              images={images} 
              closeModal={closeModal} 
              prevSlide={prevSlide} 
              nextSlide={nextSlide} 
              slideNumber={slideNumber}
              containerSmall={containerSmall}
              containerBig={containerBig}
               />}</>, mountElement)
  )
}


export default Overlays