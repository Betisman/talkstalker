import React from 'react';
import Head from 'next/head';
import * as Components from '../../common';

const Home = () => (
  <>
    <Head>
      <title>Event Tracker || Home</title>
    </Head>

    <Components.Layout>
      <div className="landing">landing page</div>

      <Components.Map></Components.Map>
    </Components.Layout>
  </>
);

export default Home;
