import React, { Component } from 'react';
import Login from './LoginModal.jsx';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navbarr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  

  render () {
    return (
    <Navbar collapseOnSelect expand="lg" id="navbarApp" variant="dark">
      <Navbar.Brand><h1 id="logo">Shadow Moses.</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href=".">Home</Nav.Link>
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#all" id="all" onClick={this.props.clicker}>All</NavDropdown.Item>
            <NavDropdown.Item href="#tshirt" id="tshirt" onClick={this.props.clicker}>T-Shirt</NavDropdown.Item>
            <NavDropdown.Item href="#sweather" id="sweather" onClick={this.props.clicker}>Sweather</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Events" id="collasible-nav-dropdown">
            <NavDropdown.Item id="jp" onClick={this.props.clicker}>JP</NavDropdown.Item>
            <NavDropdown.Item id="usa" onClick={this.props.clicker}>USA</NavDropdown.Item>
            <NavDropdown.Item id="uk" onClick={this.props.clicker}>UK</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"> <Login/> </Nav.Link>
          <Nav.Link eventKey={2} href="#cart">
            Cart
      </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  }
  
}

export default Navbarr;

 
