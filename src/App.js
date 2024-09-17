import React, { useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './views/About'
import GetInTouch from './views/GetInTouch'
import Home from './views/Home';
import useContentful from './useContentful'

const handleContainerSmall = "max-w-[800px] mx-auto mt-6 px-2"
const handleContainerBig = "max-w-[1240px] mx-auto p-2"

function App() {

  const [photos, setPhotos] = useState([])
  const { getPhotos } = useContentful()

  useEffect(() => {
    getPhotos().then((response) => setPhotos(response))
  }, [])

  return (
    <>
      <Navbar containerBig={handleContainerBig} />
        <Routes>
          <Route exact path='/analog' element={<Home containerSmall={handleContainerSmall} containerBig={handleContainerBig} photos={photos} />} />
          <Route exact path='/about' element={<About containerSmall={handleContainerSmall} photos={photos} />} />
          <Route exact path='/contact' element={<GetInTouch containerSmall={handleContainerSmall} />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
