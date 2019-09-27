import React, { useContext } from 'react';
import axios from 'axios';
import { Layout, Map, EventList, Searchbar, City }  from '../../common';
import { SearchContext } from '../../../context';
import '../../../styles/pages/events.scss';
import eventList from '../../common/eventsList';

const Events = () => {
  const [data, setData] = React.useState(null);
  const { city } = useContext(SearchContext);
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
          <City name={city} />
          <div className="eventsList">
            {data && data.map(EventList)}
          </div>
          <Map events={data} />
        </div>
      </Layout>
    </>
  );
};
export default Events;
