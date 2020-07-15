import React from "react";
import {Button, Container, Form} from 'react-bootstrap'
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import module from './Register.module.scss';
import {PublicPage} from "../components/page";

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
      <Container className={module.formContainer}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
        >
          {
            forms.map((form) => {
              return (
                <Form.Group key={form.field} controlId={"form" + form.field}>
                  <Form.Label>
                    {form.label}
                  </Form.Label>
                  <Form.Control
                    name={form.field}
                    required
                    type={form.type}
                    placeholder={form.placeholder}
                    ref={register}
                  />
                </Form.Group>
              )
            })
          }
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </PublicPage>
  )
}
