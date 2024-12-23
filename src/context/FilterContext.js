import { createContext, useState, useContext } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedFilterBy, setSelectedFilterBy] = useState('City');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [randomizedFeed, setRandomizedFeed] = useState([]); 

  return (
    <FilterContext.Provider value={{ selectedFilter, setSelectedFilter, selectedFilterBy, setSelectedFilterBy, randomizedFeed, setRandomizedFeed }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook to use the FilterContext
export const useFilter = () => {
  return useContext(FilterContext); 
};
