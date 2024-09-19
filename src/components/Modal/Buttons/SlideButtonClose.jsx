import React from 'react'

const SlideButtonClose = ({ closeModal }) => {
  return (

            <div className='
                absolute 
                md:top-6 
                md:right-6 
                top-2 
                right-2 
                text-zinc-600 
                cursor-pointer 
                w-8 
                h-8 
                hover:text-zinc-50' 
                onClick={closeModal}
                >
                    <svg className="
                        w-8 h-8 
                        fill-zinc-500 
                        transition-all 
                        duration-150 
                        hover:fill-zinc-50 
                        focus:fill-zinc-50" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2427 7.75737C16.6332 8.1479 16.6332 8.78106 16.2427 9.17158L13.4142 12L16.2427 14.8284C16.6332 15.219 16.6332 15.8521 16.2427 16.2427C15.8521 16.6332 15.219 16.6332 14.8284 16.2427L12 13.4142L9.17158 16.2427C8.78106 16.6332 8.1479 16.6332 7.75737 16.2427C7.36685 15.8521 7.36685 15.219 7.75737 14.8284L10.5858 12L7.75737 9.17159C7.36685 8.78106 7.36685 8.1479 7.75737 7.75737C8.14789 7.36685 8.78106 7.36685 9.17158 7.75737L12 10.5858L14.8284 7.75737C15.219 7.36685 15.8521 7.36685 16.2427 7.75737Z" />
                    </svg>
            </div>
  )
}

export default SlideButtonClose