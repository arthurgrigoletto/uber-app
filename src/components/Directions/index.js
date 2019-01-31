import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey='AIzaSyC163peB1xm0MzsqiodYeHiSeRLrotM8lc'
    strokeWidth={3}
    strokeColor='#222'
  />
);
export default Directions;
