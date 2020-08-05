import React from 'react';
import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">The Kodigo Adventure</h1>
            <h2 className="subtitle">A showcase of my kodigo projects</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
