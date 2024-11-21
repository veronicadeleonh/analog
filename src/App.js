import React, { useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer'
import About from './pages/About'
import GetInTouch from './pages/GetInTouch'
import Home from './pages/Home';
import LoadSpinner from './shared/LoadSpinner';
import useContentful from './useContentful'


const handleContainerSmall = "max-w-[720px] mx-auto mt-6 sm:px-2 px-3"
const handleContainerBig = "max-w-[1240px] mx-auto sm:p-2 p-3"

function App() {

  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const { getPhotos } = useContentful()

  useEffect(() => {
    getPhotos().then((response) => {
      setPhotos(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar containerBig={handleContainerBig} />
      {loading ? (
        <LoadSpinner />
      ) : (
        <Routes>
          <Route exact path='/' element={<Home containerSmall={handleContainerSmall} containerBig={handleContainerBig} photos={photos} />} />
          <Route exact path='/about' element={<About containerSmall={handleContainerSmall} photos={photos} />} />
          <Route exact path='/contact' element={<GetInTouch containerSmall={handleContainerSmall} />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
