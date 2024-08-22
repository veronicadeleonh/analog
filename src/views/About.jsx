import React from 'react'
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import LinkToUXUI from '../components/LinkToUXUI';
import CamerasIUse from '../components/CamerasIUse';

const About = ({containerSmall}) => {

  return (
    <div className={containerSmall}>
        <div className='pb-10 font-light text-xl text-zinc-100'>
          <p className='pb-4'>I'm <span className='font-bold'>Verónica</span>, an <span className='font-bold'>analog photography enthusiast</span> and 
          <span className='font-bold'> female solo traveler</span> based in Berlin. Here are some of snaps from my backpacking adventures ✌🏽.</p>

          <p>When I am not travelling or planning trips around the world, I like to design and build interfaces.</p>
        </div>

        <div className='text-zinc-100'>
            <Map
              mapboxAccessToken="pk.eyJ1IjoidmVyb25pY2FkZWxlb25oIiwiYSI6ImNrZjU0ZzM0cDBqYzgyc21kazBwbWlxemcifQ.PD9lxFAUmHtAh5TUogPICw"
              initialViewState={{
                longitude: 0,
                latitude: 30,
                zoom: 0.4
              }}
              style={{width: '100%', height: '420px'}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            />
         <p className='text-zinc-300 text-right text-sm pt-2 pb-4'>World map showing the places I've taken pictures since 2018</p>
        </div>

        <CamerasIUse />
        <LinkToUXUI />

    </div>

  )
}

export default About