import React, { useEffect, useState } from 'react'
import PhotoGrid from './PhotoGrid'

export const Filters = ({ containerSmall, photos }) => {

  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(photos)

  let filters = [... new Set(photos.map(photo => photo.country))] 
//  console.log(filters, 'cities')

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  useEffect(() => {
    filterItems()
  }, [selectedFilters])

  const filterItems = () => {
    if (selectedFilters.length > 0) {
       let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = photos.filter((photo) => photo.country === selectedCategory)
        return temp
       })
       setFilteredItems(tempItems.flat())
    } else {
      setFilteredItems([...photos])
    }
  }

  console.log(filteredItems, 'filtered')

  return (
    <div>
        <div className={containerSmall}>
          <div className='flex gap-2 text-zinc-200'>
              {filters.map((country, index) => (
                <button
                  onClick={() => handleFilterButtonClick(country)}
                  className={`font-normal ${
                  selectedFilters?.includes(country) ? "bg-zinc-50 text-stone-900 font-light rounded-sm py-1 px-2" : "" }`}
                  >
                    {country}
                </button>
              ))}
          </div>
        </div>

        {/* <PhotoGrid filteredItems={filteredItems} /> */}

        <div className='font-semibold text-zinc-100'>
          {filteredItems.map((item, index) => (
            <div>
              {item.caption}
            </div>  
          ))}
        </div>

    </div>
  )
}

export default Filters
