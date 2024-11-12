import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // State values
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedFilterBy, setSelectedFilterBy] = useState('City');
  const [randomizedFeed, setRandomizedFeed] = useState([]);

// Shuffle function
    function fisherYatesShuffle(arr) {
    return arr
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);
  }

  // Update randomized feed using Fisher-Yates shuffle
  const shuffleFeed = (photos) => {
    setRandomizedFeed(fisherYatesShuffle(photos)); 
  };

  return (
    <AppContext.Provider
      value={{
        selectedFilter,
        setSelectedFilter,
        selectedFilterBy,
        setSelectedFilterBy,
        randomizedFeed,
        setRandomizedFeed,
        shuffleFeed, 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
