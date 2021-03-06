import React from "react";
import {useHistory} from "react-router-dom";
import {useOktaAuth} from "@okta/okta-react";

import {SimpleForm} from "../../components/form";
import Loading from "./Loading";
import Page from "../Page";

const forms = [
  {
    field: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'iamuser@example.com'
  },
  {
    field: 'username',
    label: 'Username',
    placeholder: 'iamuser'
  },
  {
    field: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'S0meS7rong!!P455word'
  },
];

export default function Register() {
  const history = useHistory();
  const {authState} = useOktaAuth();

  if (authState.isAuthenticated) {
    history.push('/app');
  }
  if (authState.isPending) {
    return <Loading/>
  }

  const onSubmit = data => {
    console.log(data); // TODO backend
    history.push('/login');
  };

  return (
    <Page>
      <SimpleForm
        fields={forms}
        onSubmit={onSubmit}
        submitText='Register'
      />
    </Page>
  )
}
