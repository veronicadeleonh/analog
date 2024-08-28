import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'

const Home = ({ containerSmall, containerBig, photos }) => {

  const [selectedFilter, setSelectedFilter] = useState('All')
 // const [filteredItems, setFilteredItems] = useState(photos)

  let filters = ["All", ...new Set(photos.map(photo => photo.city))]

  const handleFilterSelectionClick = (e) => setSelectedFilter(e.target.value)

  // const handleFilterButtonClick = () => {
  //   const newItems = photos.filter((el) => el.city === selectedFilter)
  //   setFilteredItems(newItems)
  // }

  const filteredItems = selectedFilter === 'All'? photos : photos.filter((el) => el.city === selectedFilter)

  // useEffect(() => {
  //   setFilteredItems(filters);
  // }, filters);

  return (
    <div>
        <Hero containerSmall={containerSmall} />
        <Filters containerBig={containerBig} filters={filters} filterSelectionClick={handleFilterSelectionClick} selectedFilter={selectedFilter} photos={photos} />
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home