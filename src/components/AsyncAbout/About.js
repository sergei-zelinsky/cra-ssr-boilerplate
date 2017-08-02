import React from 'react';
import Helmet from 'react-helmet';

const About = ({match}) => (
  <div>
    <Helmet>
      <title>About page title</title>
      <meta property="og:title" content="About page title"/>

    </Helmet>
    <h2>About page</h2>
    <p>You are on the About page: {match.url}</p>
  </div>
);

export default About;
