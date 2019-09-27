import React from 'react';
import App, { Container } from 'next/app';
import { CombinedCtxProvider } from '../context';

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    }
    return {
      pageProps
    };
  }

  render() {
    const { Component, pageProps, token } = this.props;
    
    return (
      <Container>
        <CombinedCtxProvider token={token}>
          <Component {...pageProps} />
        </CombinedCtxProvider>
      </Container>
    );
  }
}

export default MyApp;