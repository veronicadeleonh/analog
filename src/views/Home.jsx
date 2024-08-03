import React from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'

const Home = ({containerSmall, containerBig}) => {

  return (
    <div>
        <Hero containerSmall={containerSmall}/>
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} />
    </div>
  )
}

export default Home