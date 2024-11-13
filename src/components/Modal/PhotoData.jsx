import React from 'react'

const PhotoData = ({ filteredItems, slideNumber, setSelectedFilter, setSelectedFilterBy, closeModal }) => {

const item = filteredItems[slideNumber] || {};
const { city, country, year, caption } = item;

console.log(setSelectedFilter, setSelectedFilterBy, 'photodata');

  const handleFilterClick = (filterBy, filter) => {
    setSelectedFilterBy(filterBy);
    setSelectedFilter(filter);
    closeModal()
  };

  return (
    <div className='sm:order-first order-last'>
        <p className='text-zinc-50 font-semibold'>{caption}</p>
        <p className='text-zinc-50'>
          <span onClick={() => handleFilterClick('City', city)} className='p-1 bg-teal-200/20 text-teal-100 text-sm uppercase rounded-sm cursor-pointer transition-all duration-150 hover:bg-teal-200/30'>{city}</span>, <span> </span>
          <span onClick={() => handleFilterClick('Country', country)} className='p-1 bg-lime-200/20 text-lime-100 text-sm uppercase rounded-sm cursor-pointer transition-all duration-150 hover:bg-lime-200/30'>{country}</span> - <span> </span>
          <span onClick={() => handleFilterClick('Year', year.toString())} className='font-mono p-1 bg-gray-200/20 text-gray-100 text-sm rounded-sm cursor-pointer transition-all duration-150 hover:bg-gray-200/30'>{year}</span></p>
    </div>
  )
}

export default PhotoData