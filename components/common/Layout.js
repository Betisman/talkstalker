import React from 'react';
import Link from 'next/link';
import '../../styles/common/general.scss';
import '../../styles/common/layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Link href='/'>
        <a>
          <img src="/static/svg/LOGO.svg" alt="logo" className="logo" />
        </a>
      </Link>
      
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>
          Events
              </a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>
              add Events
              </a>
            </Link>
          </li>
        </ul>
    
      </nav>
      {children}
    </div>
  );
};

export default Layout;