import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Searchbar } from '../../common';
import '../../../styles/pages/home.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>TalkStalker || Home</title>
      </Head>

      <Layout>
        <div className="landing">
          <div className="landding_inner">
            <h1 className="title">BEST TECH EVENT SEARCH  ENGINE</h1>
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
