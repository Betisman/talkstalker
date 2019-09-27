import React, { useContext } from 'react';
import { SearchContext } from '../../context';
import '../../styles/common/eventsList.scss';

const eventList = event => {
  const { city } = useContext(SearchContext);
  return (
    <div className="eventsListItem" key="event.name">
      <div className="eventImg">
        <img src={`https://source.unsplash.com/1600x900/?${event.city}`} alt="img" />
      </div>
      <div className="detail">
        <h1>{event.name}</h1>
        <a href={event.url}>
          <p>Event url</p>
        </a>
        <p>start date: {new Date(event.startDate).toLocaleDateString()}</p>
        <p>end date: {new Date(event.endDate).toLocaleDateString()}</p>
        <p>{event.city}</p>
        <p>{event.twitter}</p>
      </div>
    </div>
  );
};

export default eventList;
