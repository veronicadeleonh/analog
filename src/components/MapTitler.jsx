import React from 'react'
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapTitler = ({ photos }) => {

    const coordinatesArray = photos.map(photo => photo.coordinates)

    const uniqueCoordinates = coordinatesArray.filter((obj, index) => {
    return index === coordinatesArray.findIndex(o => obj.lon === o.lon);
});

  return (
    <div>
        <Map
            initialViewState={{
            longitude: 0,
            latitude: 30,
            zoom: 0.5
            }}
            style={{width: '100%', height: 420}}
            mapStyle="https://api.maptiler.com/maps/aquarelle/style.json?key=atg7wBdiKY7CGrnXsRU3"
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
        </Map>
    </div>
  )
}

export default MapTitler