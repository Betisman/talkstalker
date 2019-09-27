import React from 'react';

import { Marker as GLMarker } from 'react-map-gl';

const Marker = ({ event, setPopupInfo }) => {
  return (
    <GLMarker
      key={Math.random + event.url}
      latitude={event.geometry.lat}
      longitude={event.geometry.lng}
    >
      <button
        className="marker-btn"
        style={{
          'background': 'transparent',
          'border': 'none'
        }}
        onClick={e => {
          e.preventDefault();
          setPopupInfo(event);
        }}
      >
        <img src="'../../static/svg/LOGO.svg" alt="Logo" />
      </button>
    </GLMarker>
  );
};

export default Marker;
