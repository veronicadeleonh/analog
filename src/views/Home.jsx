import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'

const Home = ({ containerSmall, containerBig, photos }) => {

  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(photos)

  let filters = [...new Set(photos.map(photo => photo.country))] 
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
        <Hero containerSmall={containerSmall} />
        <Filters containerSmall={containerSmall} filters={filters} filterButtonClick={handleFilterButtonClick} selectedFilters={selectedFilters} />
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home