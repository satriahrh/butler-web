import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';

import logo from "../assets/logo.png";
import '../App.scss'

export function PublicNavigation() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo} width="30" height="30" className="d-inline-block align-top" alt="Butler"
          />
          {' Butler'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/login">Log In</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
