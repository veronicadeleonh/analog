import React from 'react'

export const FilterBy = ({filterBySelectionclick, selectedFilterBy}) => {
 
 let filterByArr = ['City', 'Country', 'Year']

  return (
    <div className='flex gap-2 items-center'>
            <div className='uppercase text-zinc-500 text-sm'>Filter by</div>
            <div className='overflow-x-scroll md:overflow-auto whitespace-nowrap flex gap-2 md:flex-wrap md:justify-center items-center font-normal text-l text-zinc-500 bg-zinc-900 rounded-sm p-2'>
            {filterByArr.map((filterBy, index) => (
                <button
                  key={index}
                  onClick={(e) => filterBySelectionclick(e)}
                  className={`${selectedFilterBy === filterBy ? "active" : "" } inline-block rounded-sm h-8 px-2 transition-all duration-150 hover:bg-zinc-800 [&.active]:bg-zinc-50 [&.active]:text-zinc-900`}
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