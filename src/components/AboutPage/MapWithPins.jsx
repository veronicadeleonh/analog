import React, { useState } from 'react';
import { useFilter } from '../../context/FilterContext';
import { useNavigate } from 'react-router-dom';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapWithPins = ({ photos }) => {
  const { setSelectedFilter, setSelectedFilterBy } = useFilter();
  const navigate = useNavigate();

  const coordinatesArray = photos.map(photo => photo.coordinates);

  // Remove duplicated coordinates
  const uniqueCoordinates = photos.filter((obj, index, self) =>
    index === self.findIndex(o => o.coordinates.lon === obj.coordinates.lon && o.coordinates.lat === obj.coordinates.lat)
  );

  const [selectedPin, setSelectedPin] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: -30,
    latitude: 28,
    zoom: 1.5,
  });

  const handlePinClick = (pin) => {
    setSelectedPin(selectedPin?.coordinates.lon === pin.coordinates.lon ? null : pin);
    if (pin) {
      setViewState({
        longitude: pin.coordinates.lon,
        latitude: pin.coordinates.lat,
        zoom: 4,
      });
    }
  };

  const handleFilterSelection = (filterType, value) => {
  console.log('Filter By:', value);
  console.log('City:', filterType);
  setSelectedFilter(filterType);
  setSelectedFilterBy(value);
  navigate('/', { state: { selectedFilter: filterType, selectedFilterBy: value } });
};

  return (
    <div>
      {uniqueCoordinates.length > 0 ? (
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
          style={{ width: '100%', height: '420px', borderRadius: '4px' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {uniqueCoordinates.map((pin, key) => (
            <Marker
              key={key}
              longitude={pin.coordinates.lon}
              latitude={pin.coordinates.lat}
              anchor="bottom"
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handlePinClick(pin);
                }}
              >
                <img src="/icons/location.svg" alt="Pin" />
              </button>
            </Marker>
          ))}

          {selectedPin && (
            <Popup
              latitude={selectedPin.coordinates.lat}
              longitude={selectedPin.coordinates.lon}
              onClose={() => setSelectedPin(null)}
              closeOnClick={false} // Keeps the popup open when clicking outside
              offset={[0, -20]}
            >
              <span
                onClick={() => handleFilterSelection(selectedPin.city, 'City')}
                className="p-1 bg-teal-200/20 text-teal-100 text-sm uppercase rounded-sm cursor-pointer transition-all duration-150 hover:bg-teal-200/30"
              >
                {selectedPin.city}
              </span>
              ,&nbsp;
              <span
                onClick={() => handleFilterSelection(selectedPin.country, 'Country')}
                className="p-1 bg-lime-200/20 text-lime-100 text-sm uppercase rounded-sm cursor-pointer transition-all duration-150 hover:bg-lime-200/30"
              >
                {selectedPin.country}
              </span>
            </Popup>
          )}
        </Map>
      ) : null}
    </div>
  );
};

export default MapWithPins;
