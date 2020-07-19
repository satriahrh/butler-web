import React, {useState, useEffect} from "react";
import {useOktaAuth} from '@okta/okta-react'
import Page from "./Page";
import {Alert, Container} from "react-bootstrap";

export default function App() {
  const [user, setUser] = useState();
  const [userIsLoaded, setUserIsLoaded] = useState(false);
  const [error, setError] = useState();
  const {authService} = useOktaAuth();
  useEffect(() => {
    if (!userIsLoaded) {
      setUserIsLoaded(true);
      authService.getUser(
      ).then(
        res => {
          setUser(res)
        }
      ).catch(
        err => {
          setError(err.message)
        }
      );
    }
  });

  const errorAlert = error && <Alert variant='danger'>error</Alert>;
  return (
    <Page appContexts={{
      logoutCallback: () => {
        authService.logout('/')
      }
    }}>
      <Container>
        {errorAlert}
        <h1>Hello, {user && user.given_name}</h1>
      </Container>
    </Page>
  )
}
