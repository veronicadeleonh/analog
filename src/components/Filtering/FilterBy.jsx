import React from 'react'

export const FilterBy = ({filterBySelectionclick, selectedFilterBy}) => {
 
 let filterByArr = ['City', 'Country', 'Year']

  return (
    <div className='flex gap-2 items-center'>
            <div className='uppercase text-zinc-500 text-sm'>Filter by</div>
            <div className='overflow-x-scroll md:overflow-auto whitespace-nowrap flex gap-2 md:flex-wrap md:justify-center items-center font-normal text-l text-zinc-500 rounded-sm p-2'>
            {filterByArr.map((filterBy, index) => (
                <button
                  key={index}
                  onClick={(e) => filterBySelectionclick(e)}
                  className={`${selectedFilterBy === filterBy & filterBy === 'City' ? "bg-teal-200/20 text-teal-100" 
                    : selectedFilterBy === filterBy & filterBy === 'Country' ? "bg-lime-200/20 text-lime-100"
                    : selectedFilterBy === filterBy & filterBy === 'Year' ? "bg-gray-200/20 text-gray-100"
                    : "bg-[none] text-zinc-400" } inline-block rounded-sm text-sm uppercase p-1 transition-all duration-150`}
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