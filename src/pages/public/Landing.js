import React from "react";
import {Button, Container, Jumbotron} from 'react-bootstrap'
import {useOktaAuth} from "@okta/okta-react";
import {useHistory}  from 'react-router-dom';

import module from './Landing.module.scss'
import Loading from "./Loading";
import Page from "../Page";

export function Landing() {
  const {authState} = useOktaAuth();
  const history = useHistory();

  if (authState.isAuthenticated) {
    history.push('/app');
  }
  if (authState.isPending) {
    return <Loading/>
  }

  return (
    <Page>
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
    </Page>
  )
}
