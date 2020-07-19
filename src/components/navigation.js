import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';

import logo from "../assets/logo.png";
import '../index.scss'

export function Navigation({appContexts}) {
  let navs = [];
  if (appContexts) {
    navs = [
      <Nav.Item key={0}><Nav.Link onClick={appContexts.logoutCallback}>Logout</Nav.Link></Nav.Item>
    ]
  } else {
    navs = [
      <Nav.Item key={0}><Nav.Link href="/register">Register</Nav.Link></Nav.Item>,
      <Nav.Item key={1}><Nav.Link href="/login">Log In</Nav.Link></Nav.Item>
    ]
  }

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
          <Nav>{navs}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
