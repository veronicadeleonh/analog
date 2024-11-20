import React from 'react'

export const FilterBy = ({filterBySelectionclick, selectedFilterBy}) => {
 
 let filterByArr = ['City', 'Country', 'Year']

  return (
    <div className='flex gap-2 items-center'>
            <div className='uppercase text-zinc-600 text-sm'>Filter by</div>
            <div className='flex gap-1 overflow-x-scroll md:overflow-auto whitespace-nowrap md:flex-wrap md:justify-center items-center font-normal text-zinc-500 bg-zinc-900 p-2 rounded-sm text-sm'>
            {filterByArr.map((filterBy, index) => (
                <button
                  key={index}
                  onClick={(e) => filterBySelectionclick(e)}
                  className={`${selectedFilterBy === filterBy & filterBy === 'City' ? "bg-teal-200/20 text-teal-100" 
                    : selectedFilterBy === filterBy & filterBy === 'Country' ? "bg-lime-200/20 text-lime-100"
                    : selectedFilterBy === filterBy & filterBy === 'Year' ? "bg-orange-200/20 text-orange-100"
                    : "bg-[none] text-zinc-500" } inline-block rounded-sm uppercase p-1 transition-all duration-150`}
                  value={filterBy}
                  >
                    {filterBy} 
                </button>
              ))}
            </div>
          </div>
  )
}

export default FilterBy