import React from 'react'
import { createPortal } from 'react-dom'
import PhotoModal from './PhotoModal'

const mountElement = document.getElementById("overlays")

const Overlays = props => {

const { openModal, closeModal, prevSlide, nextSlide, slideNumber, containerSmall, containerBig, filteredItems } = props

  return (
    createPortal(
      <>{openModal && 
          <PhotoModal 
              filteredItems={filteredItems} 
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