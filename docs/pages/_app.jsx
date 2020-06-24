import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '../components/Layout';

function App({ Component }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component />
      </Layout>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default App;
