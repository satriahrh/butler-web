import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import {PublicPage} from "../../components/page";
import {SimpleForm} from "../../components/form";

const forms = [
  {
    field: 'identity',
    label: 'Username or Email',
    placeholder: 'iamuser or iamuser@example.com'
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
  const {register, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data); // TODO backend
    history.push('/');
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
