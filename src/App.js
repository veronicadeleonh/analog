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
        <div className="fixed inset-0 flex justify-center items-center bg-black/30">
          <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
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
