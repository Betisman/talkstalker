import React from 'react';

const Admin = () => {

  return(
    <div className="adminInfo info">
      <h2>My event</h2>
      <p>name: <span>GDG DevFest</span></p>
      <p>date: <span>2020-01-19</span></p>
      <p>location: <span>Budapest</span></p>
      <p>att: <span>1000 - 3000</span></p>
      <p>ticket: <span>$100</span></p>
      <div className="divider" />
      <div className="c4p">
        <h3>c4p</h3>
        <p>start date: <span>2019-11-23</span></p>
        <p>end date: <span>2019-11-30</span></p>
      </div>
    </div>
  );
};

export default Admin;