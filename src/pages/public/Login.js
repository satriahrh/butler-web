import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import OktaAuth from '@okta/okta-auth-js';
import {useOktaAuth} from '@okta/okta-react'

import {SimpleForm} from "../../components/form";
import Loading from "./Loading";
import Page from "../Page";

const forms = [
  {
    field: 'username',
    label: 'Username',
    placeholder: 'iamuser',
    autoComplete: 'username',
  },
  {
    field: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'S0meS7rong!!P455word',
    autoComplete: 'current-password',
  },
];

export default function Login() {
  const {register, handleSubmit, setError, errors} = useForm();
  const {authState, authService} = useOktaAuth();
  const history = useHistory();

  if (authState.isAuthenticated) {
    history.push('/app');
  }
  if (authState.isPending) {
    return <Loading/>
  }

  const onSubmit = data => {
    OktaAuth({
      issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
    }).signIn({
      username: data.username,
      password: data.password,
    }).then(res => {
      authService.redirect({sessionToken: res.sessionToken})
    }).catch(err => {
      setError("okta", {
        type: "manual",
        message: err.message,
      })
    });
  };

  return (
    <Page>
      <SimpleForm
        errors={errors}
        fields={forms}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        submitText='Login'
      />
    </Page>
  )
}
