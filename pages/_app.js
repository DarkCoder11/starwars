import React, { useEffect } from 'react';
import App from 'next/app';
import Router from 'next/router';
import PropTypes from 'prop-types';
import withError from 'next-with-error';
import { Notify } from 'react-redux-notify';
import NextNprogress from 'nextjs-progressbar';

import 'styles/index.global.scss';
import 'react-redux-notify/dist/ReactReduxNotify.css';

import { configureStore } from 'libraries/index';

import ErrorPage from './404';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }, []);

  return (
    <>
      <NextNprogress height="6" color="#000" options={{ showSpinner: false }} />
      <Component {...pageProps} />
      <Notify />
    </>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

MyApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default configureStore.withRedux(withError(ErrorPage)(MyApp));
