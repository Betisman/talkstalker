import React from 'react';
import '../../styles/common/general.scss';
import '../../styles/common/layout.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <img src="/static/svg/LOGO.svg" alt="logo" className="logo" />
      {children}
    </div>
  );
};

export default Layout;