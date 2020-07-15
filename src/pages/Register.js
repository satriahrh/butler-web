import React from "react";
import {Button, Container, Form} from 'react-bootstrap'

import module from './Register.module.scss';
import {PublicPage} from "../components/page";

const forms = [
  {
    field: 'email',
    label: 'Email',
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
  return (
    <PublicPage>
      <Form as={Container} className={module.formContainer}>
        {
          forms.map((form) => {
            return (
              <Form.Group controlId={"form" + form.field}>
                <Form.Label>
                  {form.label}
                </Form.Label>
                <Form.Control
                  required
                  type={form.type}
                  placeholder={form.placeholder}
                />
              </Form.Group>
            )
          })
        }
        <Button type="submit">Submit</Button>
      </Form>
    </PublicPage>
  )
}
