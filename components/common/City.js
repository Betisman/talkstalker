import React from 'react';

const City = ({ name }) => {
  return (
    <div className="city">
      {name ? name : 'All around the world'}
    </div>
  );
};

export default City;