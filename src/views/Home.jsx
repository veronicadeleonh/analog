import { useState } from 'react'
import Hero from '../components/HomePage/Hero'
import PhotoGrid from '../components/HomePage/PhotoGrid'
import Filters from '../components/Filtering/Filters'

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
        <div className='sticky top-0 z-10 bg-zinc-950'>
        <Filters containerBig={containerBig} filters={filters} filterSelectionClick={handleFilterSelectionClick} selectedFilter={selectedFilter} photos={photos} randomize={handleRandomize} />
        </div>
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home