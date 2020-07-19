import React from "react";
import {useOktaAuth} from '@okta/okta-react'
import Page from "./Page";


export default function App() {
  const {authService} = useOktaAuth();
  return (
    <Page appContexts={{
      logoutCallback: () => {authService.logout('/')}
    }}>
      <h1>You are logged in!</h1>
    </Page>
  )
}