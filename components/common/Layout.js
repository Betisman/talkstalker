import React from 'react';
import Link from 'next/link';
import '../../styles/common/general.scss';
import '../../styles/common/layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <img src="/static/svg/LOGO.svg" alt="logo" className="logo" />
      <nav>
        <Link href="/events">
          <a>
          Events
          </a>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;