import React from "react";
import {useOktaAuth} from '@okta/okta-react'
import {Container} from "react-bootstrap";
import {HashRouter, Switch, Route} from "react-router-dom";

import Page from "./Page";
import Dashboard from "./Dashboard";

export default function App() {
  const {authService} = useOktaAuth();

  return (
    <Page appContexts={{
      logoutCallback: () => {
        authService.logout('/')
      }
    }}>
      <Container>
        <HashRouter>
          <Switch>
            <Route path='/' exact>
              <Dashboard/>
            </Route>
          </Switch>
        </HashRouter>
      </Container>
    </Page>
  )
}
