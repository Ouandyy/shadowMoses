import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Navbarr = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbarApp" variant="dark">
      <Navbar.Brand>Shadow Moses.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href=".">Home</Nav.Link>
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="All">All</NavDropdown.Item>
            <NavDropdown.Item href="T-Shirt">T-Shirt</NavDropdown.Item>
            <NavDropdown.Item href="Sweather">Sweather</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Events" id="collasible-nav-dropdown">
            <NavDropdown.Item href="event/JP">JP</NavDropdown.Item>
            <NavDropdown.Item href="event/USA">USA</NavDropdown.Item>
            <NavDropdown.Item href="event/UK">UK</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Cart
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbarr;