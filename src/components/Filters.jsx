import React from 'react'

export const Filters = ({ containerSmall, filters, filterButtonClick, selectedFilters }) => {


  return (
    <div>
        <div className={containerSmall}>
          <div className='flex gap-2 font-normal text-l text-zinc-100 h-8'>
              {filters.map((country, index) => (
                <button
                  onClick={() => filterButtonClick(country)}
                  className={`rounded-sm py-1 px-2 ${
                  selectedFilters?.includes(country) ? "bg-zinc-50 text-stone-900" : "" }`}
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
