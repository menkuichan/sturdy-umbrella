import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

function App({ Component }) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

App.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default App;
