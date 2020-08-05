import React from 'react';
import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">The Kodigo Adventure</h1>
            <h2 class="subtitle">A showcase of my kodigo projects</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
