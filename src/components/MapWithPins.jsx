import React from 'react'
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapWithPins = ({ photos }) => {

  console.log(photos[2])

  return (
    <div>
      { photos.length > 0 ? 
          (<Map
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              initialViewState={{
                longitude: 0,
                latitude: 30,
                zoom: 0.4
              }}
              style={{width: '100%', height: '420px'}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                  {photos.map((pin, key) => { 
                      <Marker
                        key={key}
                        longitude={pin.coordinates.lon}
                        latitude={pin.coordinates.lat}
                        anchor="bottom"
                        >
                        PIN
                      </Marker>
                  })}
                  <Marker longitude={-100} latitude={40} anchor="bottom" > PIN </Marker> 
                  <Marker longitude={photos[0].coordinates.lon} latitude={photos[0].coordinates.lon} anchor="bottom" > PIN </Marker>
                  {/* <Marker longitude={photos[1].coordinates.lon} latitude={photos[1].coordinates.lon} anchor="bottom" > PIN </Marker> 
                  <Marker longitude={photos[2].coordinates.lon} latitude={photos[2].coordinates.lon} anchor="bottom" > PIN </Marker> 
                  <Marker longitude={photos[3].coordinates.lon} latitude={photos[3].coordinates.lon} anchor="bottom" > PIN </Marker> 
                  <Marker longitude={photos[4].coordinates.lon} latitude={photos[4].coordinates.lon} anchor="bottom" > PIN </Marker>  */}
                      
            </Map>) : null }
    </div>
  )
}

export default MapWithPins