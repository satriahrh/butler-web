import React from "react";
import {Button, Container, Jumbotron, Navbar, Nav} from 'react-bootstrap'

import logo from "../assets/logo.png";
import module from './Landing.module.scss'

export function Landing() {
  return (
    <>
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
      <Jumbotron className={module.jumbotron}>
        <Container>
          <div className={module.jumbotronText}>
            <h1>Automate your Personal Board</h1>
            <p>with butler by <a href="https://satriahrh.github.io">satriahrh</a></p>
            <hr/>
          </div>
          <div className={module.jumbotronAction}>
            <Button href='/register' size='large'>Register for Free, Now!</Button>
            {' '}
            <Button href='/login' size='large' variant='secondary'>Log In </Button>
          </div>
        </Container>
      </Jumbotron>
      <footer>
        <Container>
          <p>c 2020 by <a href="https://satriahrh.github.io">satriahrh.github.io</a></p>
        </Container>
      </footer>
    </>
  )
}
