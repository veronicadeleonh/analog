import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Footer from './components/Footer'
import PhotoGrid from './components/PhotoGrid';

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

const images = [
  '/img-landscape.jpg',
  '/img-portrait.jpg',
  '/img-landscape.jpg',
  '/img-portrait.jpg',
  '/img-portrait.jpg',
  '/img-landscape.jpg',
  '/img-landscape.jpg',
]

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <PhotoGrid images={images} />
      <Footer />
    </div>
  );
}

export default App;
