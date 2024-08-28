import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'

const Home = ({ containerSmall, containerBig, photos }) => {

  let randomPhotos = photos.sort(() => 0.5 - Math.random());
  // console.log(randomPhotos, 'random')

  const [selectedFilter, setSelectedFilter] = useState('All')

  let filters = ["All", ...new Set(randomPhotos.map(photo => photo.city))]

  const handleFilterSelectionClick = (e) => setSelectedFilter(e.target.value)

  const filteredItems = selectedFilter === 'All'? randomPhotos : randomPhotos.filter((el) => el.city === selectedFilter)



  return (
    <div>
        <Hero containerSmall={containerSmall} />
        <Filters containerBig={containerBig} filters={filters} filterSelectionClick={handleFilterSelectionClick} selectedFilter={selectedFilter} photos={photos} />
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home