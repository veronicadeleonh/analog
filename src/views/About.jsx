import React from 'react'
import Map from 'react-map-gl';

const About = () => {
  return (
    <div>
          <div className='items-center max-w-[800px] mt-6 mx-auto font-light text-xl text-zinc-100'>
        I'm <span className='font-bold'>Verónica</span>, an <span className='font-bold'>analog photography enthusiast</span> and <span className='font-bold'>female solo traveler</span> based in Berlin. Here are some of snaps from my backpacking adventures ✌🏽<div className=""></div>
        And  more more more more more more more more more more more more more more</div>

        <div className='items-center max-w-[800px] mt-6 mx-auto'>
        <Map
          mapboxAccessToken="pk.eyJ1IjoidmVyb25pY2FkZWxlb25oIiwiYSI6ImNrZjU0ZzM0cDBqYzgyc21kazBwbWlxemcifQ.PD9lxFAUmHtAh5TUogPICw"
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{width: '100%', height: '100%'}}
          mapStyle="mapbox://styles/mapbox/streets-v9"
         />
        </div>
    </div>
  )
}

export default About