import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';

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
    zoom: 8
  });

  const [top, setTop] = useState();

  const map = useRef(null);

  useEffect(()=>{
    // if(map) {
    //   const topPosition = map.current.getBoundingClientRect().top;
    //   setTop(topPosition);
    //   document.addEventListener('scroll', ()=>{
    //     const topPosition = map.current.getBoundingClientRect().top;
    //     setTop(topPosition);
    //   });
    // }
   
  }, []);


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
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
