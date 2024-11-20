import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapWithPins = ({ photos }) => {

  const coordinatesArray = photos.map(photo => photo.coordinates)

  // To remove duplicated coordinates
    const uniqueCoordinates = photos.filter((obj, index, self) =>
    index === self.findIndex(o => o.coordinates.lon === obj.coordinates.lon && o.coordinates.lat === obj.coordinates.lat)
  );

  const [selectedPin, setSelectedPin] = useState(null)

  return (
    <div>
      { uniqueCoordinates.length > 0 ? 
          (<Map
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              initialViewState={{
                longitude: -30,
                latitude: 28,
                zoom: 1.5
              }}
              style={{width: '100%', height: '420px', borderRadius:'4px'}}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              //mapStyle="mapbox://styles/veronicadeleonh/clzb8pw16007101pr52gp0r8a"
            >
                  {uniqueCoordinates.map((pin, key) => ( 
                      <Marker
                        key={key}
                        longitude={pin.coordinates.lon}
                        latitude={pin.coordinates.lat}
                        anchor="bottom"
                        >
                          <button
                          onClick={ (e) => {
                          e.preventDefault()
                          setSelectedPin(pin); 
                          }}
                          onClose={() => setSelectedPin(null)}
                          >
                          <img src='/icons/location.svg' alt="Pin"/>
                          </button>
                      </Marker>
                  ))}
              
              {selectedPin && (
                <Popup 
                  latitude={selectedPin.coordinates.lat} 
                  longitude={selectedPin.coordinates.lon} 
                  onClose={() => setSelectedPin(null)}
                  closeOnClick={false}  // Keeps it open on additional clicks
                  offset={[0, -20]}
                >
                      <p className='text-zinc-950'>{selectedPin.city}, {selectedPin.country}</p>
                </Popup>
              )}

            </Map>) : null }
    </div>
  )
}

export default MapWithPins