import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapWithPins from "../components/MapWithPins"

import LinkToUXUI from '../components/LinkToUXUI';
import CamerasIUse from '../components/CamerasIUse';

const About = ({ containerSmall, photos }) => {

//  if (photos.length > 3 ) console.log(photos[2], 'about')
//console.log(photos)

  return (
    <div className={containerSmall}>
        <div className='pb-10 font-light text-xl text-zinc-100'>
          <p className='pb-4'>Hi, I'm <span className='font-bold'>Verónica</span>, a Berlin bases <span className='font-bold'>analog photography enthusiast</span> and 
          <span className='font-bold'> female solo traveler</span>. On this site, you'll find snapshots from my backpacking adventures over the years ✌🏽🗺️.</p>

          <p className='pb-4'>My passion for solo travel began with my first trip to Cuba in 2018. Since then, I've been captivated by the thrill of exploring new places 
            and planning my journeys independently. Traveling alone allows me to completely disconnect from my daily routine, giving me the freedom 
            to forge new connections with people<span className='italic'>-and with animals—</span>and to explore at my own pace.</p>

          <p className='pb-4'>I immerse myself deeply in the cultures I visit, building relationships with locals by sharing 
            in their daily lives and often staying in their homes. This approach to travel helps me better 
            understand the world, connecting me to the essence of life in different corners of the globe.</p>

          <p>When I'm not traveling or planning my next adventure, I enjoy designing and building user interfaces.</p>
        </div>

            <MapWithPins photos={photos} />
            
         <p className='text-zinc-300 text-right text-sm pt-2 pb-4'>World map showing the places I've taken pictures since 2018</p>


        <CamerasIUse containerSmall={containerSmall} />
        <LinkToUXUI />

    </div>

  )
}

export default About