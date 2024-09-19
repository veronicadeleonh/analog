import React from 'react'

const SlideImage = ({ filteredItems, slideNumber }) => {
  return (

    <div className='h-full px-2 flex items-center justify-center'>
            <img 
                className='w-auto max-w-[95%] max-h-[95%] pointer-events-none select-none' 
                src={filteredItems[slideNumber].image.fields.file.url}
                alt={filteredItems[slideNumber].image.fields.title} />
    </div>             

  )
}

export default SlideImage