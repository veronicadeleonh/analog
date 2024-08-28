import React from 'react'

export const Filters = ({ containerBig, filters, filterButtonClick, selectedFilter, setFilteredItems, filterSelectionClick, photos }) => {


  return (
    <div>
        <div className={containerBig}>
          <div className='flex gap-2 justify-end items-center font-normal text-l text-zinc-100 bg-zinc-900 rounded-sm h-12 pr-2 pl-2'>

              {filters.map((country, index) => (
                <button
                  key={index}
                  onClick={(e) => filterSelectionClick(e)}
                  className={`${selectedFilter === country ? "active" : "" } rounded-sm h-8 px-2 transition-all duration-150 hover:bg-zinc-700 [&.active]:bg-zinc-50 [&.active]:text-stone-900`}
                  value={country}
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
