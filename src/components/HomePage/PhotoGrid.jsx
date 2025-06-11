import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Overlays from '../Modal/Overlays'

const PhotoGrid = ({ containerSmall, containerBig, filteredItems, setSelectedFilter, setSelectedFilterBy }) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [openModal, setOpenModal] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    // Function to find photo by image ID
    const findPhotoById = (imageId) => {
        if (!filteredItems || !imageId) return -1
        return filteredItems.findIndex(item => item?.image?.sys?.id === imageId)
    }

    // close modal
    const handleCloseModal = () => {
        setOpenModal(false)
        navigate('/')
    }

    // open modal - now uses image ID for URL
    const handleOpenModal = (index) => {
        const photo = filteredItems[index]
        if (!photo?.image?.sys?.id) {
            console.error('Photo or image ID not found:', photo)
            return
        }
        
        const imageId = photo.image.sys.id
        setSlideNumber(index)
        setOpenModal(true)
        navigate(`/photo/${imageId}`)
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
        const imageId = newPhoto.image.sys.id
        navigate(`/photo/${imageId}`, { replace: true })
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
        const imageId = newPhoto.image.sys.id
        navigate(`/photo/${imageId}`, { replace: true })
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
        console.log('URL Effect triggered:', {
            pathname: location.pathname,
            filteredItemsLength: filteredItems?.length,
            isLoading: isLoading
        })

        const pathMatch = location.pathname.match(/^\/photo\/(.+)$/)
        
        if (pathMatch) {
            const imageId = pathMatch[1]
            console.log('Looking for photo with ID:', imageId)
            
            // If filteredItems is empty, show loading and wait
            if (!filteredItems || filteredItems.length === 0) {
                console.log('No filtered items yet, showing loading...')
                setIsLoading(true)
                return
            }
            
            setIsLoading(false)
            const photoIndex = findPhotoById(imageId)
            console.log('Photo index found:', photoIndex)
            
            if (photoIndex !== -1) {
                console.log('Opening modal for photo:', filteredItems[photoIndex])
                setSlideNumber(photoIndex)
                setOpenModal(true)
            } else {
                console.warn(`Photo not found for ID: ${imageId}`)
                console.log('Available photo IDs:', filteredItems.map(item => item?.image?.sys?.id))
                // Redirect to home if photo not found
                navigate('/', { replace: true })
            }
        } else {
            setIsLoading(false)
            setOpenModal(false)
        }
    }, [location.pathname, filteredItems, navigate, isLoading])

    useEffect(() => {
        if (openModal) {
            document.addEventListener('keydown', handleKeyPress, true)
            return () => {
                document.removeEventListener('keydown', handleKeyPress, true)
            }
        }
    }, [openModal, slideNumber, filteredItems])

    // Show loading state when accessing direct photo URL and data isn't ready
    if (isLoading || (location.pathname.startsWith('/photo/') && (!filteredItems || filteredItems.length === 0))) {
        return (
            <div className={containerBig}>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '100vh',
                    fontSize: '18px',
                    color: '#666'
                }}>
                    <div>Loading photo...</div>
                </div>
            </div>
        )
    }

    return (
        <div className={containerBig}>
            {/* Debug info - remove after fixing */}
            {process.env.NODE_ENV === 'development' && (
                <div style={{ position: 'fixed', top: 0, left: 0, background: 'black', color: 'white', padding: '10px', zIndex: 9999, fontSize: '12px' }}>
                    <div>URL: {location.pathname}</div>
                    <div>Filtered Items: {filteredItems?.length || 0}</div>
                    <div>Modal Open: {openModal.toString()}</div>
                    <div>Slide Number: {slideNumber}</div>
                    <div>Loading: {isLoading.toString()}</div>
                </div>
            )}

            <div className='columns-1 sm:columns-2 lg:columns-3 2xl:columns-3 py-0 gap-2'>
                {filteredItems && filteredItems.map((photo, index) => (
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