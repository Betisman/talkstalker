import React from 'react';

import axios from 'axios';
import * as Components from '../../common';

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
      <Components.Layout>
        <div>
          {data && data.map(Components.EventList)}
          <Components.Map events={data}></Components.Map>
        </div>
      </Components.Layout>
    </>
  );
};
export default Events;
