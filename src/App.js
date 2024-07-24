import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Footer from './components/Footer'
import PhotoGrid from './components/PhotoGrid';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PhotoGrid />
      <Footer />
    </div>
  );
}

export default App;
