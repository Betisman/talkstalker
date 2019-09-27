import React from 'react';

import { Popup as GLPopup } from 'react-map-gl';

const Popup = ({ popupInfo, setPopupInfo }) => {
  return (
    popupInfo && (
      <GLPopup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.geometry.lng}
        latitude={popupInfo.geometry.lat}
        closeOnClick={false}
        onClose={() => setPopupInfo(null)}
      >
        <div>
          <div>
            <h2>{popupInfo.type}</h2>
            NAME: <p>{popupInfo.name}</p>
            URL: <p>{popupInfo.url}</p>
            Call for papers: <p>{popupInfo.cfpUrl}</p>
            Country: <p>{popupInfo.country}</p>
            Social Media: <p>{popupInfo.twitter}</p>
          </div>
        </div>
      </GLPopup>
    )
  );
};

export default Popup;
