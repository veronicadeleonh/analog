import React, { useState, useRef } from 'react'

const RandomizeButton = ({ containerBig, randomize }) => {

  const [ hovered, setHovered ] = useState(false)
  const ref = useRef(null)

  return (
    <div className={containerBig}>
        <button 
            className="
              group 
              flex 
              text-zinc-500 
              bg-zinc-900 
              font-normal 
              underline 
              underline-offset-2 
              rounded-sm py-2 
              p-2 
              text-nowrap
              overflow-hidden
              "
            onClick={randomize}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
              className='
             fill-zinc-500 
             group-hover:fill-slate-100
              ' 
              alt="Shuffle"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M17.2474 4.34305C17.611 3.92738 18.2428 3.88519 18.6584 4.24883L21.6584 6.87329C21.8755 7.06318 22 7.33754 22 7.62594C22 7.91433 21.8755 8.18869 21.6584 8.37858L18.6584 11.003C18.2428 11.3667 17.611 11.3245 17.2474 10.9088C16.8837 10.4931 16.9259 9.86137 17.3416 9.49773L18.3381 8.62593H17.214C16.3931 8.62593 15.6081 8.96234 15.0418 9.55674L14.9741 9.62788C14.5932 10.0278 13.9602 10.0431 13.5603 9.66222C13.1604 9.2813 13.145 8.64832 13.5259 8.24843L13.5937 8.17729L14.3178 8.86701L13.5937 8.17728C14.5374 7.18661 15.8458 6.62593 17.214 6.62593H18.3381L17.3416 5.75412C16.9259 5.39048 16.8837 4.75873 17.2474 4.34305ZM2 7.62593C2 7.07365 2.44772 6.62593 3 6.62593H6.57775C8.09649 6.62593 9.53291 7.31622 10.4818 8.50205L15.0798 14.2484C15.6492 14.9599 16.511 15.3741 17.4223 15.3741H18.3382L17.3416 14.5023C16.9259 14.1386 16.8837 13.5069 17.2474 13.0912C17.611 12.6755 18.2428 12.6334 18.6584 12.997L21.6584 15.6215C21.8755 15.8113 22 16.0857 22 16.3741C22 16.6625 21.8755 16.9369 21.6584 17.1267L18.6584 19.7512C18.2428 20.1148 17.611 20.0726 17.2474 19.657C16.8837 19.2413 16.9259 18.6095 17.3416 18.2459L18.3381 17.3741H17.4223C15.9035 17.3741 14.4671 16.6838 13.5182 15.498L8.92017 9.75161C8.35085 9.0401 7.489 8.62593 6.57775 8.62593H3C2.44772 8.62593 2 8.17822 2 7.62593ZM10.4397 14.3378C10.8396 14.7187 10.855 15.3517 10.4741 15.7516L10.4063 15.8227C9.46262 16.8134 8.15418 17.3741 6.78597 17.3741H3.00001C2.44773 17.3741 2.00001 16.9264 2.00001 16.3741C2.00001 15.8218 2.44773 15.3741 3.00001 15.3741H6.78597C7.6069 15.3741 8.39196 15.0377 8.95817 14.4433L9.02594 14.3721C9.40687 13.9723 10.0398 13.9569 10.4397 14.3378Z" />
              </svg>
            <div
              style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
              className='overflow-x-hidden transition-all duration-150 group-hover:text-slate-100'>
              <span ref={ref} className='pl-2' >Shuffle</span>
            </div>
        </button>
    </div>
  )
}

export default RandomizeButton