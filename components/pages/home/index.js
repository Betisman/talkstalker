import React from 'react';
import Head from 'next/head';
import { Layout, Searchbar } from '../../common';
import '../../../styles/pages/home.scss';
import Link from 'next/link';

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
            <Link href="/myevent">
              <a>
                <div className="organizer">organizer</div>
              </a>
            </Link>
            
          </div>
        
        </div>
      </Layout>
    </>
  );
};
     
export default Home;
