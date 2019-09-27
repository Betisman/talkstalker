import React from 'react';

import { Marker as GLMarker } from 'react-map-gl';

const Marker = event => {
  return (
    <GLMarker
      key={Math.random + event.url}
      latitude={event.geometry.lat}
      longitude={event.geometry.lng}
    >
      <button
        className="marker-btn"
        onClick={e => {
          e.preventDefault();
        }}
      >
        <img src="'../../static/svg/LOGO.svg" alt="Logo" />
      </button>
    </GLMarker>
  );
};

export default Marker;
