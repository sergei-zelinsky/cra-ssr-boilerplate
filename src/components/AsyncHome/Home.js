import React from 'react';
import Helmet from 'react-helmet';

const Home = ({match}) => (
  <div>
    <Helmet>
      <title>Home page title</title>
      <meta property="og:title" content="Home page title"/>
    </Helmet>
    <h2>Home page</h2>
    <p>You are on the Home page: {match.url}</p>
  </div>
);

export default Home;
