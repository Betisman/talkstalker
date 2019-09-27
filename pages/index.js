import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => (
  <>
    <Head>
      <title>Event Tracker || Home</title>
    </Head>

    <Layout>
      <div className="landing">
        landing page
      </div>
    </Layout>
  </>
);

export default Home;