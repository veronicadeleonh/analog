import { useState } from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'
import RandomizeButton from '../components/RandomizeButton'

const Home = ({ containerSmall, containerBig, photos }) => {

  function randomSort(arr) {
  return arr
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
}

  const randomPhotos = randomSort([...photos])

  const [randomizedFeed, setRandomizedFeed] = useState(randomPhotos);
  const [selectedFilter, setSelectedFilter] = useState('All')

  let filters = ["All", ...new Set(photos.map(photo => photo.city).sort())]

  const handleFilterSelectionClick = (e) => setSelectedFilter(e.target.value)
  const handleRandomize = (randomPhotos) => setRandomizedFeed(randomPhotos);

  const filteredItems = selectedFilter === 'All'? randomPhotos : randomPhotos.filter((el) => el.city === selectedFilter)


  return (
    <div>
        <Hero containerSmall={containerSmall} />
        <div className='sticky top-0 z-10'>
        <RandomizeButton containerBig={containerBig} randomize={handleRandomize} />
        </div>
        <Filters containerBig={containerBig} filters={filters} filterSelectionClick={handleFilterSelectionClick} selectedFilter={selectedFilter} photos={photos} />
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home