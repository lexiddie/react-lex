import React from 'react';
import { NavLink } from 'react-router-dom';

import { Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Jumbotron>
      <h1>Flower App</h1>
      <p>This should be the landing page (home page).</p>
      <NavLink to='/register'>
        <Button className='btn-secondary'>Sign Up</Button>
      </NavLink>
    </Jumbotron>
  );
};

export default Home;
