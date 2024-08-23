import React from 'react'

const PhotoData = ({ photos, slideNumber }) => {

  return (
    <div>

        <p className='text-zinc-50'>{photos[slideNumber].city}, {photos[slideNumber].country} - <span className='font-mono'>{photos[slideNumber].year}</span></p>
        <p className='text-zinc-50 font-semibold'>{photos[slideNumber].caption}</p>

    </div>
  )
}

export default PhotoData