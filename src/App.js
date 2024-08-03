import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './views/About'
import GetInTouch from './views/GetInTouch'
import Home from './views/Home';

const handleContainerSmall = "max-w-[800px] mx-auto mt-6 px-4"
const handleContainerBig = "max-w-[1240px] mx-auto p-4"

function App() {

  return (
    <>
      <Navbar containerBig={handleContainerBig} />
        <Routes>
          <Route exact path='/' element={<Home containerSmall={handleContainerSmall} containerBig={handleContainerBig} />} />
          <Route exact path='/about' element={<About containerSmall={handleContainerSmall} />} />
          <Route exact path='/contact' element={<GetInTouch containerSmall={handleContainerSmall} />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
