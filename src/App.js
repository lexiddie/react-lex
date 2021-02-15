import React from 'react';
import { Container, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import Register from './Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import flower from './flower.jpg';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='/' className='mr-auto'>
            <img src={flower} width='30' height='30' className='d-inline-block align-top' alt='React Bootstrap logo' /> Flower
          </Navbar.Brand>
          <Nav className='mr-auto nav-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/register'>Register Us</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-info'>Search</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route path='/register'>
            <Register />
          </Route>

          <Route path='/about'>
            <About />
          </Route>
          <Route path='/pricing'>
            <Pricing />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
