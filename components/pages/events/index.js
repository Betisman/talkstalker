import React from 'react';
import axios from 'axios';
import { Layout, Map, EventList, Searchbar, City }  from '../../common';
import '../../../styles/pages/events.scss';

const Events = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchEvents = async () => {
      const result = await axios.get('http://localhost:3000/events');
      const data = await result.data;
      setData(data);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Layout>
        <div className="eventsPage">
          <Searchbar />
          <City name='madrid' />
          <div className="eventsList">
            {data && data.map(EventList)}
          </div>
          <Map />
        </div>
      </Layout>
    </>
  );
};
export default Events;
