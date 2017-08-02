import React from 'react';

const Home = ({match}) => (
  <div>
    <h2>Home page</h2>
    <p>You are on the Home page: {match.url}</p>
  </div>
);

export default Home;
