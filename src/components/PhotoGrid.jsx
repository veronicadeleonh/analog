import React from 'react'

const images = [
    '/img-landscape.jpg',
    '/img-portrait.jpg'
]

const PhotoGrid = () => {
  return (
    <div className='columns-1 sm:columns-2 lg:columns-3 py-10 md:pz-20 gap-4'>
        {images.map((src, index) => (
                <div key={index} className='mb-4 break-inside-avoid'>
                  <img src={src} className='w-full object-cover rounded-sm' />
                </div>  
            ))}
    </div>
  )
}

export default PhotoGrid