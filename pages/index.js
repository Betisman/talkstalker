import React from 'react';
import Head from 'next/head';
import Layout from '../components/common/Layout';
import '../styles/pages/home.scss';

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
