import React from 'react'
import Map, { Marker } from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

const MapWithPins = ({ photos }) => {


  const coordinatesArray = photos.map(photo => photo.coordinates)

  const uniqueCoordinates = coordinatesArray.filter((obj, index) => {
    return index === coordinatesArray.findIndex(o => obj.lon === o.lon);
});


  return (
    <div>
      { uniqueCoordinates.length > 0 ? 
          (<Map
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              initialViewState={{
                longitude: 0,
                latitude: 30,
                zoom: 0.5
              }}
              style={{width: '100%', height: '420px'}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                  {uniqueCoordinates.map((pin, key) => ( 
                      <Marker
                        key={key}
                        longitude={pin.lon}
                        latitude={pin.lat}
                        anchor="bottom"
                        >
                        <img src='/icons/location.svg'/>
                      </Marker>
                  ))}                   
            </Map>) : null }
    </div>
  )
}

export default MapWithPins