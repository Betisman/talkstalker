import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import * as Components from '../../common';

const Home = () => {
  return (
    <>
      <Head>
        <title>Event Tracker || Home</title>
      </Head>

      <Link href="/events">
        <a>Events</a>
      </Link>

      <Components.Layout>
        <div className="landing">landing page</div>
      </Components.Layout>
    </>
  );
};
export default Home;
