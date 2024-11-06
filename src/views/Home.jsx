import { useState } from 'react'
import Hero from '../components/HomePage/Hero'
import PhotoGrid from '../components/HomePage/PhotoGrid'
import Filters from '../components/Filtering/Filters'
import FilterBy from '../components/Filtering/FilterBy'
import RandomizeButton from '../components/Filtering/RandomizeButton'

const Home = ({ containerSmall, containerBig, photos }) => {

  function randomSort(arr) {
  return arr
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
}

  const randomPhotos = randomSort([...photos])

  const [randomizedFeed, setRandomizedFeed] = useState(randomPhotos);
  const [selectedFilterBy, setSelectedFilterBy] = useState('City')
  const [selectedFilter, setSelectedFilter] = useState('All');

  let cityFilter = ["All", ...new Set(photos.map(photo => photo.city).sort())]
  let countryFilter = ["All", ...new Set(photos.map(photo => photo.country).sort())]
  let yearFilter = ["All", ...new Set(photos.map(photo => photo.year).sort())]

  const handleFilterSelectionClick = (e) => setSelectedFilter(e.target.value)
  const handleFilterBySelectionClick = (e) => setSelectedFilterBy(e.target.value)
  const handleRandomize = (randomPhotos) => setRandomizedFeed(randomPhotos);

  const filteredBy = selectedFilterBy === 'City' ? cityFilter 
  : selectedFilterBy === 'Country' ? countryFilter 
  : yearFilter

  // const filteredItems = selectedFilter === 'All' ? randomPhotos : randomPhotos.filter((el) => el.city === selectedFilter)

  const filteredItems = selectedFilter === 'All' ? randomPhotos 
  : selectedFilterBy === 'City'? randomPhotos.filter((el) => el.city === selectedFilter)
  : selectedFilterBy === 'Country' ? randomPhotos.filter((el) => el.country === selectedFilter)
  : randomPhotos.filter((el) => el.year.toString() === selectedFilter)

  return (
    <div>
        <Hero containerSmall={containerSmall} />
        <div className='sticky top-0 z-10 bg-zinc-950'>
          <div className={containerBig}>
            <div className='flex justify-between items-end'>
              <RandomizeButton randomize={handleRandomize} />
              <FilterBy filterBySelectionclick={handleFilterBySelectionClick} selectedFilterBy={selectedFilterBy} />
            </div>
          </div>
          <Filters containerBig={containerBig} filteredBy={filteredBy} filterSelectionClick={handleFilterSelectionClick} selectedFilter={selectedFilter} photos={photos} />
        </div>
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} filteredItems={filteredItems} />
    </div>
  )
}

export default Home