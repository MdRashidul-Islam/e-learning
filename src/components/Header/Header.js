import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"
const Header = () => {
  return (
<>
  <Navbar className="nav" variant="dark">
    <Container>
    <Navbar.Brand className="nav-brand" >E-LEARNING</Navbar.Brand>
    <Nav className="ms-auto">
      <NavLink className="nav-item" to="/home"
       activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}
      >
        Home
      </NavLink>

      <NavLink className="nav-item" to="/services"
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}
      >
        Services
        </NavLink>

      <NavLink className="nav-item" to="/about"
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}
      >
        About
        
        </NavLink>

      <NavLink className="nav-item" to="/team"
      activeStyle={{
        fontWeight: "bold",
        color: "black"
      }}
      >
        Team
        </NavLink>
      
    </Nav>
    </Container>
  </Navbar>
</>
  );
};

export default Header;