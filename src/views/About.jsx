import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import MapWithPins from "../components/AboutPage/MapWithPins"
import LinkToUXUI from '../components/AboutPage/LinkToUXUI';
import CamerasIUse from '../components/AboutPage/CamerasIUse';



const About = ({ containerSmall, photos }) => {

  return (
    <div className={containerSmall}>
      <div className='font-light text-zinc-100 text-lg'>
        <h2 className='text-5xl font-semibold pb-8'>About me</h2>

        <p className='pb-4'>I'm <span className='font-semibold'>Verónica</span>, an <span className='font-semibold'>analog photography enthusiast</span> and 
        <span className='font-semibold'> female solo traveler</span> based in Berlin. Since my first solo trip to Cuba in 2018, I’ve been drawn to bringing at least one analog camera with me in all my journeys.</p>

        <p className='pb-4'>Using analog cameras helps me disconnect from the digital world, creating space for deeper connections with the places I visit and the people I meet. 
        </p>

        {/* <p className='pb-4'>The fact that I can't see the photos until I come back from the trip adds an element of mystery, and brings sometimes unexpected surprises—whether it’s capturing really special moments or discovering the quirks of melted, damaged or expired film.</p> */}
        
        <p className='pb-4'>I plan to continue exploring and visiting more amazing islands and coasts! </p>      

        <div className='pt-10 pb-10'>
            <MapWithPins photos={photos}/>
            <p className='text-right text-sm pt-2 pb-4'>World map showing the places I've taken pictures since 2018</p>
        </div>
        
        <CamerasIUse />
        <LinkToUXUI />
      </div>
    </div>

  )
}

export default About