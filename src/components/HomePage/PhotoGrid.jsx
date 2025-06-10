import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Overlays from '../Modal/Overlays'

const PhotoGrid = ({ containerSmall, containerBig, filteredItems, setSelectedFilter, setSelectedFilterBy }) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [openModal, setOpenModal] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    // close modal
    const handleCloseModal = () => {
        setOpenModal(false)
        navigate('/')
    }

    // open modal - now uses photo ID for URL
    const handleOpenModal = (index) => {
        const photo = filteredItems[index]
        if (!photo?.image?.sys?.id) {
            console.error('Photo or photo ID not found:', photo)
            return
        }
        
        const photoId = photo.image.sys.id
        setSlideNumber(index)
        setOpenModal(true)
        navigate(`/photo/${photoId}`)
    } 

    // previous image - updates URL
    const handlePrevSlide = () => {
        if (!filteredItems || filteredItems.length === 0) return
        
        const newIndex = slideNumber === 0 
            ? filteredItems.length - 1 
            : slideNumber - 1
        
        const newPhoto = filteredItems[newIndex]
        if (!newPhoto?.image?.sys?.id) {
            console.error('Previous photo not found:', newPhoto)
            return
        }
        
        setSlideNumber(newIndex)
        const photoId = newPhoto.image.sys.id
        navigate(`/photo/${photoId}`, { replace: true })
    }

    // next image - updates URL
    const handleNextSlide = () => {
        if (!filteredItems || filteredItems.length === 0) return
        
        const newIndex = slideNumber + 1 === filteredItems.length
            ? 0
            : slideNumber + 1
        
        const newPhoto = filteredItems[newIndex]
        if (!newPhoto?.image?.sys?.id) {
            console.error('Next photo not found:', newPhoto)
            return
        }
        
        setSlideNumber(newIndex)
        const photoId = newPhoto.image.sys.id
        navigate(`/photo/${photoId}`, { replace: true })
    }

    // keyboard prev/next image
    const handleKeyPress = (e) => {
        if (e.key === 'ArrowLeft') {
            handlePrevSlide();
        } else if (e.key === 'ArrowRight') {
            handleNextSlide();
        } else if (e.key === 'Escape') {
            handleCloseModal()
        }
    }

    // Check URL on component mount and route changes
    useEffect(() => {
        // Don't process if filteredItems is empty or still loading
        if (!filteredItems || filteredItems.length === 0) {
            return
        }

        const pathMatch = location.pathname.match(/^\/photo\/(.+)$/)
        if (pathMatch) {
            const photoId = pathMatch[1]
            const photoIndex = filteredItems.findIndex(item => 
                item?.image?.sys?.id === photoId
            )
            
            if (photoIndex !== -1) {
                setSlideNumber(photoIndex)
                setOpenModal(true)
            } else {
                // Photo not found, redirect to gallery
                navigate('/', { replace: true })
            }
        } else {
            setOpenModal(false)
        }
    }, [location.pathname, filteredItems, navigate])

    useEffect(() => {
        if (openModal) {
            document.addEventListener('keydown', handleKeyPress, true)
            return () => {
                document.removeEventListener('keydown', handleKeyPress, true)
            }
        }
    }, [openModal, slideNumber, filteredItems]) // Added dependencies

    return (
        <div className={containerBig}>
            <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-3 py-0 gap-2'>
                {filteredItems.map((photo, index) => (
                    <div 
                        key={photo.image.sys.id} 
                        className='mb-2 break-inside-avoid transition-all duration-300 hover:translate-y-[-4px]'
                        onClick={() => handleOpenModal(index)}>
                        
                        <img 
                            src={photo.image.fields.file.url} 
                            className='w-full object-cover rounded-sm cursor-pointer' 
                            alt={photo.caption}
                        />
                    </div>   
                ))}
            </div> 

            <Overlays 
                openModal={openModal && filteredItems && filteredItems.length > 0} 
                filteredItems={filteredItems} 
                closeModal={handleCloseModal} 
                prevSlide={handlePrevSlide} 
                nextSlide={handleNextSlide}
                slideNumber={slideNumber} 
                containerSmall={containerSmall} 
                containerBig={containerBig}
                setSelectedFilter={setSelectedFilter}
                setSelectedFilterBy={setSelectedFilterBy}
            />
        </div>
    )
}

export default PhotoGrid