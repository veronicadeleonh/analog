import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './views/About'
import GetInTouch from './views/GetInTouch'
import Home from './views/Home';
 

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<GetInTouch />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
