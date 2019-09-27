import React from 'react';
import Head from 'next/head';
import { Layout, Searchbar } from '../../common';
import '../../../styles/pages/home.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Event Tracker || Home</title>
      </Head>

      <Layout>
        <div className="landing">
          <div className="landding_inner">
            <h1 className="title">BESTE TECH EVENT SEARCH  ENGINE</h1>
            <Searchbar />
          </div>
        
        </div>
      </Layout>
    </>
  );
};
     
export default Home;
