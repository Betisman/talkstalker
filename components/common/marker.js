import React from 'react';

import { Marker as GLMarker } from 'react-map-gl';

const Marker = event => {
  return (
    <GLMarker
      key={Math.random + event.url}
      latitude={event.coordinates[0]}
      longitude={event.coordinates[1]}
    >
      <button
        className="marker-btn"
        onClick={e => {
          e.preventDefault();
          console.log(event, 'clicked');
        }}
      >
        <img src="'../../static/svg/LOGO.svg" alt="Skate Park Icon" />
      </button>
    </GLMarker>
  );
};

export default Marker;
