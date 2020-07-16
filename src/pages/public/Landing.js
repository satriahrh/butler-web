import React from "react";
import {Button, Container, Jumbotron} from 'react-bootstrap'
import {useOktaAuth} from '@okta/okta-react'
import {useHistory} from 'react-router-dom'

import module from './Landing.module.scss'
import {PublicPage} from "../../components/page";
import Loading from "./Loading";

export function Landing() {
  const history = useHistory();
  const {authState} = useOktaAuth();

  if (authState.isAuthenticated) {
    history.push('/app')
  }
  if (authState.isPending) {
    return <Loading/>
  }

  return (
    <PublicPage>
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
    </PublicPage>
  )
}
