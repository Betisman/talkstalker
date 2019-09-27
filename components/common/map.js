import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';

import { Marker, Popup } from '.';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiaXNtYWVsb2NhcmFtZWxvIiwiYSI6ImNrMTF0aDc3ZjBicHMzbm8wcjJsOGUwdWYifQ.VI-nu-5EG3cxAElp_xIKAg';

const Map = ({ events }) => {
  const [popupInfo, setPopupInfo] = React.useState(null);

  const [viewport, setViewport] = React.useState({
    width: '100vw',
    height: '100vh',
    latitude: 47.498382,
    longitude: 19.040471,
    zoom: 5
  });

  const map = useRef(null);

  const onViewportChange = viewport => {
    setViewport(viewport);
  };

  return (
    <div className="mapGraphContainer" ref={map}>
      <div className="mapGraph">
        <ReactMapGL
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...viewport}
          onViewportChange={onViewportChange}
          mapStyle="mapbox://styles/ismaelocaramelo/ck120kqk906c11ck54l3n0hmf"
        >
          {events && events.map(event => <Marker event={event} setPopupInfo={setPopupInfo} />)}
          <Popup popupInfo={popupInfo} setPopupInfo={setPopupInfo} />
          <GeolocateControl
            style={{
              position: 'absolute',
              padding: '10px',
              left: '15px',
              top: '15px',
              background: 'rgba(255,255,255,0.5)'
            }}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation
          />
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
