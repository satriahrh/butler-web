import React from "react";
import {Button, Container, Dropdown, Navbar, Nav} from 'react-bootstrap';

import module from './navigation.module.scss'
import logo from "../assets/logo.png";
import '../index.scss'

export const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
  <Button
    className={module.customToggle}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    variant='link'
  >
    {children}
  </Button>
));

export function Navigation({appContexts}) {
  let navs;
  if (appContexts) {
    navs = (
      <Dropdown alignRight>
        <Dropdown.Toggle as={CustomToggle}>
          {`Hi, ${appContexts.user && appContexts.user.given_name} `}<i className="far fa-user-circle"/>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={appContexts.logoutCallback}><i
            className="fas fa-sign-out-alt"/> Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  } else {
    navs = (
      <Nav>
        <Nav.Item key={0}><Nav.Link href="/register">Register</Nav.Link></Nav.Item>,
        <Nav.Item key={1}><Nav.Link href="/login">Log In</Nav.Link></Nav.Item>
      </Nav>
    )
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
          {navs}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
