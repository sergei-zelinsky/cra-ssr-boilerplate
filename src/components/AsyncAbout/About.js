import React from 'react';

const About = ({match}) => (
  <div>
    <h2>About page</h2>
    <p>You are on the About page: {match.url}</p>
  </div>
);

export default About;
