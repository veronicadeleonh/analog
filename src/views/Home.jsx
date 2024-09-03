import { useState } from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'

const Home = ({ containerSmall, containerBig, photos }) => {

  const [selectedFilter, setSelectedFilter] = useState('All')

  function randomSort(arr) {
  return arr
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
}

  const randomPhotos = randomSort([...photos])
  // console.log(randomPhotos, 'random')

  let filters = ["All", ...new Set(photos.map(photo => photo.city))]

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