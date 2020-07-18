import React from "react";
import Page from "../Page";
import Loading from "./Loading";
import {useOktaAuth} from "@okta/okta-react/src";
import {useHistory} from 'react-router-dom';

export default function Public({children}) {
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
      {children}
    </Page>
  )
}