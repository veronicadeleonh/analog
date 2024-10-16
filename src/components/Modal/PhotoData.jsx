import React from 'react'

const PhotoData = ({ filteredItems, slideNumber }) => {

  return (
    <div className='sm:order-first order-last'>
        <p className='text-zinc-50 font-semibold'>{filteredItems[slideNumber].caption}</p>
        <p className='text-zinc-50'>{filteredItems[slideNumber].city}, {filteredItems[slideNumber].country} - <span className='font-mono'>{filteredItems[slideNumber].year}</span></p>
    </div>
  )
}

export default PhotoData