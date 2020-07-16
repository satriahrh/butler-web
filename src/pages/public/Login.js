import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import OktaAuth from '@okta/okta-auth-js';
import {useOktaAuth} from '@okta/okta-react'

import {PublicPage} from "../../components/page";
import {SimpleForm} from "../../components/form";
import Loading from "./Loading";

const forms = [
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

export default function Login() {
  const history = useHistory();
  const {register, handleSubmit, setError} = useForm();
  const {authState, authService} = useOktaAuth();

  if (authState.isAuthenticated) {
    history.push('/app');
  }
  if (authState.isPending) {
    return <Loading/>
  }

  const onSubmit = data => {
    console.log(data); // TODO backend
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
        message: err,
      })
    });
  };

  return (
    <PublicPage>
      <SimpleForm
        fields={forms}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
        submitText='Login'
      />
    </PublicPage>
  )
}
