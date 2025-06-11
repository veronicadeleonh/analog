import React, { useState, useEffect} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import About from './pages/About';
import GetInTouch from './pages/GetInTouch'
import Home from './pages/Home';
import LoadSpinner from './shared/LoadSpinner';
import useContentful from './useContentful';
import { FilterProvider } from './context/FilterContext';


const handleContainerSmall = "max-w-[720px] mx-auto mt-6 sm:px-2 px-3"
const handleContainerBig = "max-w-[1240px] mx-auto sm:p-2 p-3"

function App() {

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const { getPhotos } = useContentful()
  const location = useLocation();

  useEffect(() => {
    getPhotos().then((response) => {
      setPhotos(response);
      setLoading(false);
    });
  }, []);

  // Check if we're on a photo route - if so, show the content even while loading
  const isPhotoRoute = location.pathname.startsWith('/photo/')
  const shouldShowContent = !loading || isPhotoRoute

  return (
    <>
      <Navbar containerBig={handleContainerBig} />
      {!shouldShowContent ? (
        <LoadSpinner />
      ) : (
        <FilterProvider>
          <Routes>
              <Route exact path='/' element={<Home containerSmall={handleContainerSmall} containerBig={handleContainerBig} photos={photos} loading={loading} />} />
              <Route exact path='/about' element={<About containerSmall={handleContainerSmall} photos={photos} />} />
              <Route exact path='/contact' element={<GetInTouch containerSmall={handleContainerSmall} />} />
              <Route path="/photo/:photoId" element={<Home containerSmall={handleContainerSmall} containerBig={handleContainerBig} photos={photos} loading={loading} />} />
          </Routes>
        </FilterProvider>
      )}
      <Footer />
    </>
  );
}

export default App;
