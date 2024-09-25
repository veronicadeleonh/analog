import React, { useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './views/Navbar';
import Footer from './views/Footer'
import About from './views/About'
import GetInTouch from './views/GetInTouch'
import Home from './views/Home';
import useContentful from './useContentful'


const handleContainerSmall = "max-w-[720px] mx-auto mt-6 sm:px-2 px-3"
const handleContainerBig = "max-w-[1240px] mx-auto sm:p-2 p-3"

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
          <Route exact path='/' element={<Home containerSmall={handleContainerSmall} containerBig={handleContainerBig} photos={photos} />} />
          <Route exact path='/about' element={<About containerSmall={handleContainerSmall} photos={photos} />} />
          <Route exact path='/contact' element={<GetInTouch containerSmall={handleContainerSmall} />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
