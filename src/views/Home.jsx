import React from 'react'
import Hero from '../components/Hero'
import PhotoGrid from '../components/PhotoGrid'
import Filters from '../components/Filters'

const Home = ({containerSmall, containerBig, photos }) => {

  return (
    <div>
        <Hero containerSmall={containerSmall} />
        <Filters containerSmall={containerSmall} photos={photos} />
        <PhotoGrid containerSmall={containerSmall} containerBig={containerBig} photos={photos} />
    </div>
  )
}

export default Home