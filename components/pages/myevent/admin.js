import React from 'react';

const Admin = () => {

  return(
    <div className="adminInfo info">
      <h2>My event</h2>
      <p>name: GDG DevFest</p>
      <p>date: 2020-01-19</p>
      <p>location: Budapest</p>
      <p>att: 1000 - 3000</p>
      <p>ticket: $100</p>
      <div className="divider" />
      <div className="c4p">
        <h3>c4p</h3>
        <p>start date: 2019-11-23</p>
        <p>end date: 2019-11-30</p>
      </div>
    </div>
  );
};

export default Admin;