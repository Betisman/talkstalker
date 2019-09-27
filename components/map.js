import React from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiaXNtYWVsb2NhcmFtZWxvIiwiYSI6ImNrMTF0aDc3ZjBicHMzbm8wcjJsOGUwdWYifQ.VI-nu-5EG3cxAElp_xIKAg';

const Map = () => {
  const [viewport, setViewport] = React.useState({
    width: '100vw',
    height: '100vh',
    latitude: 47.498382,
    longitude: 19.040471,
    zoom: 8
  });

  const onViewportChange = viewport => {
    console.log(viewport, 'viewport');
    setViewport(viewport);
  };

  return (
    <ReactMapGL
      mapboxApiAccessToken={MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={onViewportChange}
    />
  );
};

export default Map;
