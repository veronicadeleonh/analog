import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Overlays from '../Modal/Overlays'

const PhotoGrid = ({ containerSmall, containerBig, filteredItems, setSelectedFilter, setSelectedFilterBy }) => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const [openModal, setOpenModal] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    // Function to create URL-friendly slug from title
    const createSlug = (title) => {
        if (!title) return 'untitled'
        
        return title
            .toLowerCase()
            .trim()
            // Remove emojis and special characters
            .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')
            // Replace spaces and special characters with hyphens
            .replace(/[^a-z0-9]+/g, '-')
            // Remove leading/trailing hyphens
            .replace(/^-+|-+$/g, '')
            // Handle empty string after cleaning
            || 'untitled'
    }

    // Function to find photo by slug
    const findPhotoBySlug = (slug) => {
        return filteredItems.findIndex(item => {
            // Try to match by slug first
            const itemSlug = createSlug(item.caption || item.title || '')
            if (itemSlug === slug) {
                return true
            }
            
            // Fallback: if slug matches the sys.id (for backward compatibility)
            return item?.image?.sys?.id === slug
        })
    }

    // close modal
    const handleCloseModal = () => {
        setOpenModal(false)
        navigate('/')
    }

    // open modal - now uses photo title slug for URL
    const handleOpenModal = (index) => {
        const photo = filteredItems[index]
        if (!photo) {
            console.error('Photo not found:', photo)
            return
        }
        
        // Create slug from title/caption
        const slug = createSlug(photo.caption || photo.title || '')
        setSlideNumber(index)
        setOpenModal(true)
        navigate(`/photo/${slug}`)
    }

    // previous image - updates URL
    const handlePrevSlide = () => {
        if (!filteredItems || filteredItems.length === 0) return
        
        const newIndex = slideNumber === 0 
            ? filteredItems.length - 1 
            : slideNumber - 1
        
        const newPhoto = filteredItems[newIndex]
        if (!newPhoto) {
            console.error('Previous photo not found:', newPhoto)
            return
        }
        
        setSlideNumber(newIndex)
        const slug = createSlug(newPhoto.caption || newPhoto.title || '')
        navigate(`/photo/${slug}`, { replace: true })
    }

    // next image - updates URL
    const handleNextSlide = () => {
        if (!filteredItems || filteredItems.length === 0) return
        
        const newIndex = slideNumber + 1 === filteredItems.length
            ? 0
            : slideNumber + 1
        
        const newPhoto = filteredItems[newIndex]
        if (!newPhoto) {
            console.error('Next photo not found:', newPhoto)
            return
        }
        
        setSlideNumber(newIndex)
        const slug = createSlug(newPhoto.caption || newPhoto.title || '')
        navigate(`/photo/${slug}`, { replace: true })
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
            filteredItems: filteredItems
        })

        // Don't process if filteredItems is empty or still loading
        if (!filteredItems || filteredItems.length === 0) {
            console.log('No filtered items yet, waiting...')
            return
        }

        const pathMatch = location.pathname.match(/^\/photo\/(.+)$/)
        if (pathMatch) {
            const slug = pathMatch[1]
            console.log('Looking for photo with slug:', slug)
            
            const photoIndex = findPhotoBySlug(slug)
            console.log('Photo index found:', photoIndex)
            
            if (photoIndex !== -1) {
                console.log('Opening modal for photo:', filteredItems[photoIndex])
                setSlideNumber(photoIndex)
                setOpenModal(true)
            } else {
                console.warn(`Photo not found for slug: ${slug}`)
                console.log('Available photos:', filteredItems.map(item => ({
                    caption: item.caption,
                    slug: createSlug(item.caption || item.title || ''),
                    sysId: item?.image?.sys?.id
                })))
                // Don't redirect immediately - maybe data is still loading
                setTimeout(() => {
                    if (findPhotoBySlug(slug) === -1) {
                        navigate('/', { replace: true })
                    }
                }, 2000)
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
    }, [openModal, slideNumber, filteredItems])

    return (
        <div className={containerBig}>
            {/* Debug info - remove after fixing */}
            {process.env.NODE_ENV === 'development' && (
                <div style={{ position: 'fixed', top: 0, left: 0, background: 'black', color: 'white', padding: '10px', zIndex: 9999, fontSize: '12px' }}>
                    <div>URL: {location.pathname}</div>
                    <div>Filtered Items: {filteredItems?.length || 0}</div>
                    <div>Modal Open: {openModal.toString()}</div>
                    <div>Slide Number: {slideNumber}</div>
                </div>
            )}

            {/* Show loading if we're on a photo URL but data isn't ready */}
            {location.pathname.startsWith('/photo/') && (!filteredItems || filteredItems.length === 0) && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <div>Loading photo...</div>
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