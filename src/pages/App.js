import React, {useEffect, useState} from "react";
import {useOktaAuth} from '@okta/okta-react'
import {Alert, Container} from "react-bootstrap";
import {HashRouter, Switch, Route} from "react-router-dom";

import Page from "./Page";
import Dashboard from "./Dashboard";
import CreateBoard from "./CreateBoard";

export default function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const {authService} = useOktaAuth();
  useEffect(() => {
    authService.getUser(
    ).then(
      res => {
        setUser(res);
      }
    ).catch(
      err => {
        setError(err.message)
      }
    );
  }, [setUser, authService]);

  const errorAlert = error && <Alert variant='danger'>error</Alert>;

  return (
    <Page appContexts={{
      logoutCallback: () => {
        authService.logout('/')
      },
      user: user,
    }}
    >
      <Container>
        {errorAlert}
        <HashRouter>
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/boards/create' exact component={CreateBoard}/>
          </Switch>
        </HashRouter>
      </Container>
    </Page>
  )
}
