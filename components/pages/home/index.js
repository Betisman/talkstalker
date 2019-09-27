import React from 'react';
import Head from 'next/head';
import Layout from '../../common/Layout';
import '../../../styles/pages/home.scss';

const Home = () => (
  <>
    <Head>
      <title>Event Tracker || Home</title>
    </Head>

    <Layout>
      <div className="landing">
        BESTE TECH EVENT SEARCH  ENGINE
      </div>
    </Layout>
  </>
);

export default Home;
