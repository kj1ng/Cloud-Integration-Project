import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '100%',
    height: '500px'
  };

  const center = {
    lat: 6.6749,
    lng: 3.4194
  };

  return (
    <LoadScript
    googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
