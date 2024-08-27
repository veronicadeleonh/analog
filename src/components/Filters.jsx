import React from 'react'

export const Filters = ({ containerBig, filters, filterButtonClick, setFilteredItems, photos }) => {


  return (
    <div>
        <div className={containerBig}>
          <div className='flex gap-2 justify-end items-center font-normal text-l text-zinc-100 bg-zinc-800 rounded-sm h-10 pr-1'>
              <button 
                  className='rounded-sm py-1 px-2 h-8 transition-all duration-150 active:bg-zinc-50 active:text-stone-900 focus:bg-zinc-50 focus:text-stone-900'
                  onClick={() => setFilteredItems(photos)}
                  >All
              </button>

              {filters.map((country, index) => (
                <button
                  key={index}
                  onClick={() => filterButtonClick(country)}
                  className="rounded-sm h-8 px-2 transition-all duration-150 active:bg-zinc-50 active:text-stone-900 focus:bg-zinc-50 focus:text-stone-900"
                  >
                    {country}
                </button>
              ))}
                
          </div>
        </div>
    </div>
  )
}

export default Filters
