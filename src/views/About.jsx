import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapWithPins from "../components/MapWithPins"

import LinkToUXUI from '../components/LinkToUXUI';
import CamerasIUse from '../components/CamerasIUse';



const About = ({ containerSmall, photos }) => {

  return (
    <div className={containerSmall}>
        <h2 className='text-3xl font-semibold pb-4 text-zinc-100'>About me</h2>
        <div className='font-light text-l text-zinc-100'>
          <p className='pb-4'>I'm <span className='font-semibold'>Verónica</span>, an <span className='font-semibold'>analog photography enthusiast</span> and <span className='font-semibold'>female solo traveler</span> based in Berlin. Since my first solo trip to Cuba in 2018, I became fascinated about exploring places on my own.</p>

          <p className='pb-4'>Traveling alone allows me to disconnect from my daily routine, giving me the freedom 
            to forge new connections with people<span className='italic'>-and animals—</span>and to explore at my own pace.</p>

          <p className='pb-4'>I immerse myself deeply in the cultures I visit, building relationships with locals by sharing 
            in their daily lives and often staying in their homes. This approach to travel helps me better 
            understand the world, connecting me to the essence of life in different corners of the globe.</p>
        </div>

          <div className='pt-10 pb-10'>
            <MapWithPins photos={photos}/>
            <p className='text-zinc-300 text-right text-sm pt-2 pb-4'>World map showing the places I've taken pictures since 2018</p>
         </div>
        
        <CamerasIUse containerSmall={containerSmall} />
        
        <hr className='pb-6 pt-6 border-zinc-800'/>

        <p className='font-light text-l text-zinc-100'>When I'm not traveling or planning my next adventure, I enjoy designing and building user interfaces.</p>
        <LinkToUXUI />

    </div>

  )
}

export default About