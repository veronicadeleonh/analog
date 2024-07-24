import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Footer from './components/Footer'
import PhotoGrid from './components/PhotoGrid';

function App() {
  return (
    <div>
      <Navbar />
      <div className='items-center max-w-[800px] mt-6 mx-auto font-light text-xl text-zinc-100'>
        <Hero />
        <PhotoGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
