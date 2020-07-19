import React from "react";
import module from './form.module.scss';
import {Button, Container, Form, Alert} from "react-bootstrap";

export function SimpleForm(props) {
  const {errors, fields, onSubmit, register, submitText} = props;
  return (
    <Container className={module.simpleFormContainer}>
      <Form
        onSubmit={onSubmit}
      >
        {errors && Object.keys(errors).map((key, index) => {
          return (
            <Alert key={index} variant='danger'>
              {errors[key].message}
            </Alert>
          )
        })}
        {
          fields.map((field) => {
            return (
              <Form.Group key={field.field} controlId={"form" + field.field}>
                <Form.Label>
                  {field.label}
                </Form.Label>
                <Form.Control
                  name={field.field}
                  required
                  type={field.type}
                  placeholder={field.placeholder}
                  ref={register}
                  autoComplete={field.autoComplete}
                />
              </Form.Group>
            )
          })
        }
        <Button type="submit">{submitText}</Button>
      </Form>
    </Container>
  )
}
