import React from 'react';

const eventList = event => {
  return (
    <div style={{ width: 300, height: 300, borderColor: 'red', borderWidth: 1 }}>
      <h1>{event.name}</h1>
      <span>{event.url}</span>
      <span>{event.startDate}</span>
      <span>{event.endDate}</span>
      <span>{event.city}</span>
      <span>{event.twitter}</span>
    </div>
  );
};

export default eventList;
