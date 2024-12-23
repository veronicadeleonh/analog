import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFilter } from '../context/FilterContext';
import Hero from '../components/HomePage/Hero';
import PhotoGrid from '../components/HomePage/PhotoGrid';
import Filters from '../components/Filtering/Filters';
import FilterBy from '../components/Filtering/FilterBy';
import RandomizeButton from '../components/Filtering/RandomizeButton';

const Home = ({ containerSmall, containerBig, photos }) => {

  const location = useLocation()
  const { selectedFilter, selectedFilterBy, setSelectedFilter, setSelectedFilterBy, randomizedFeed, setRandomizedFeed } = useFilter();

  useEffect(() => {
  if (location.state) {
    const { selectedFilter, selectedFilterBy } = location.state;
    if (selectedFilter !== selectedFilter || selectedFilterBy !== selectedFilterBy) {
      setSelectedFilter(selectedFilter);
      setSelectedFilterBy(selectedFilterBy);
    }
  }
}, [location.state, setSelectedFilter, setSelectedFilterBy]);

  function randomSort(arr) {
    return arr
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);
  }

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

  console.log('Filter Inputs:');
  console.log('Selected Filter:', selectedFilter);
  console.log('Selected Filter By:', selectedFilterBy);
  console.log('Randomized Feed:', randomizedFeed);


  const filteredItems = selectedFilter === 'All' ? randomizedFeed
  : selectedFilterBy === 'City' ? randomizedFeed.filter((el) => el.city === selectedFilter)
  : selectedFilterBy === 'Country' ? randomizedFeed.filter((el) => el.country === selectedFilter)
  : randomizedFeed.filter((el) => el.year.toString() === selectedFilter);

  console.log('Randomized Feed:', randomizedFeed);

  useEffect(() => {
    setRandomizedFeed(randomSort([...photos])); 
  }, [photos]);


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
