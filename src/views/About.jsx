import React from 'react'
import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import LinkToUXUI from '../components/LinkToUXUI';

const About = () => {
  return (
    <div>
          <div className='max-w-[800px] mt-6 mx-auto font-light text-xl text-zinc-100'>
        I'm <span className='font-bold'>Verónica</span>, an <span className='font-bold'>analog photography enthusiast</span> and <span className='font-bold'>female solo traveler</span> based in Berlin. Here are some of snaps from my backpacking adventures ✌🏽<div className=""></div>
        And  more more more more more more more more more more more more more more</div>

        <div className='max-w-[800px] mt-6 mb-6 mx-auto text-zinc-100'>
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
        </div>

        <LinkToUXUI />

    </div>
  )
}

export default About