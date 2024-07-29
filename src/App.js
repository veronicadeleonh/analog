import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import About from './views/About'
import GetInTouch from './views/GetInTouch'
import Home from './views/Home';


// const imagesArray = [
//   {
//     key: 1,
//     city: 'Porlamar',
//     country: 'Venezuela',
//     year: '2018',
//     caption: 'On an excurson via Playa El Agua',
//     img:'/img-landscape.jpg'
//   },
//   {
//     key: 1,
//     city: 'La Habana',
//     country: 'Cuba',
//     year: '2018',
//     caption: 'On an excurson via Playa El Agua',
//     img:'/img-portrait.jpg'
//   },{
//     key: 1,
//     city: 'Banjul',
//     country: 'The Gambia',
//     year: '2018',
//     caption: 'On an excurson via Playa El Agua',
//     img:'/img-landscape.jpg'
//   },{
//     key: 1,
//     city: 'Manhattan, NY',
//     country: 'USA',
//     year: '2018',
//     caption: 'On an excurson via Playa El Agua',
//     img:'/img-landscape.jpg'
//   },{
//     key: 1,
//     city: 'Carrapateiras',
//     country: 'Portugal',
//     year: '2018',
//     caption: 'On an excurson via Playa El Agua',
//     img:'/img-portrait.jpg'
//   }
// ]

 

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
