import { useState } from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'

const Home = ({ containerSmall, containerBig, photos }) => {

  const [filteredItems, setFilteredItems] = useState(photos)
  let filters = [...new Set(photos.map(photo => photo.country))]

  const handleFilterButtonClick = (selectedCategory) => {
    const newItems = photos.filter((el) => el.country === selectedCategory)
    setFilteredItems(newItems)
  }


  console.log(filteredItems, 'test')

  return (
    <div>
        <Hero containerSmall={containerSmall} />
        <Filters containerBig={containerBig} filters={filters} filterButtonClick={handleFilterButtonClick} setFilteredItems={setFilteredItems} photos={photos} />
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home