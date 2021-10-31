import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}= useAuth()
  console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-4'>
        <Container>
        <Navbar.Brand as={Link} to='/home'  >Windy <span className='text-warning'>Holiday</span> Planners</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            {
              user?.email &&  <Nav.Link as={Link} to='/mybooking'>My Booking</Nav.Link>
            }
            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">   
             
              <NavDropdown.Item as={Link} to='/addNewService'>Add Service</NavDropdown.Item>
             
              <NavDropdown.Item as={Link} to='/manageallbooking'>All Booking</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link >
               {user?.displayName }
            </Nav.Link>
       
         {
           user?.email?
           <button onClick={logOut} className="text-dark btn btn-warning ">Sign Out</button>:
           <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
         }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;