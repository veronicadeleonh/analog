import React from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'

const Home = ({containerSmall, containerBig, photos }) => {

  return (
    <div>
        <Hero containerSmall={containerSmall}/>
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} />
    </div>
  )
}

export default Home