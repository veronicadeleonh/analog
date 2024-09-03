import React from 'react'
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapWithPins = ({ photos }) => {

  console.log(photos[2])

  return (
    <div>
          <Map
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

                  <Marker
                        longitude={-100}
                        latitude={40}
                        anchor="bottom"
                        >
                        PIN
                      </Marker>  
            </Map>
    </div>
  )
}

export default MapWithPins