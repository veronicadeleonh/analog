import { useState, useEffect } from 'react';
import Hero from '../components/HomePage/Hero';
import PhotoGrid from '../components/HomePage/PhotoGrid';
import Filters from '../components/Filtering/Filters';
import FilterBy from '../components/Filtering/FilterBy';
import RandomizeButton from '../components/Filtering/RandomizeButton';

const Home = ({ containerSmall, containerBig, photos }) => {

  function randomSort(arr) {
    return arr
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);
  }

  // Initial shuffled state (only when the page is loaded)
  const [randomizedFeed, setRandomizedFeed] = useState([]);
  const [selectedFilterBy, setSelectedFilterBy] = useState('City');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filters
  const cityFilter = ["All", ...new Set(photos.map(photo => photo.city).sort())];
  const countryFilter = ["All", ...new Set(photos.map(photo => photo.country).sort())];
  const yearFilter = ["All", ...new Set(photos.map(photo => photo.year).sort())];

  // Handlers
  const handleFilterSelectionClick = (e) => setSelectedFilter(e.target.value);

  const handleFilterBySelectionClick = (e) => {
    setSelectedFilterBy(e.target.value);
    setSelectedFilter("All");
  };

  const handleRandomize = () => {
    const shuffledPhotos = randomSort([...photos]);
    setRandomizedFeed(shuffledPhotos); // Update randomized feed
  };

  const filteredBy = selectedFilterBy === 'City' ? cityFilter
    : selectedFilterBy === 'Country' ? countryFilter
    : yearFilter;

  // Use effect to shuffle only once when the page loads
  useEffect(() => {
    setRandomizedFeed(randomSort([...photos])); // Shuffle on initial load
  }, [photos]);

  // Apply the filter logic to the shuffled feed
  const filteredItems = selectedFilter === 'All' ? randomizedFeed
    : selectedFilterBy === 'City' ? randomizedFeed.filter((el) => el.city === selectedFilter)
    : selectedFilterBy === 'Country' ? randomizedFeed.filter((el) => el.country === selectedFilter)
    : randomizedFeed.filter((el) => el.year.toString() === selectedFilter);

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
      <PhotoGrid
    containerSmall={containerSmall}
    containerBig={containerBig}
    photos={photos}
    filteredItems={filteredItems}
    setSelectedFilter={setSelectedFilter}
    setSelectedFilterBy={setSelectedFilterBy}
  />
    </div>
  );
}

export default Home;
