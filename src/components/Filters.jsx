import React from 'react'

export const Filters = ({ containerBig, filters, selectedFilter, filterSelectionClick }) => {

  return (
    <div>
        <div className={containerBig}>
          <div className='overflow-x-scroll md:overflow-auto whitespace-nowrap flex gap-2 md:flex-wrap md:justify-center items-center font-normal text-l text-zinc-500 bg-zinc-900 rounded-sm p-2'>
              {filters.map((filter, index) => (
                <button
                  key={index}
                  onClick={(e) => filterSelectionClick(e)}
                  className={`${selectedFilter === filter ? "active" : "" } inline-block rounded-sm h-8 px-2 transition-all duration-150 hover:bg-zinc-800 [&.active]:bg-zinc-50 [&.active]:text-stone-900`}
                  value={filter}
                  >
                    {filter}
                </button>
              ))}
                
          </div>
        </div>
    </div>
  )
}

export default Filters