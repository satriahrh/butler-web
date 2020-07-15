import React from "react";
import module from './form.module.scss';
import {Button, Container, Form} from "react-bootstrap";

export function SimpleForm(props) {
  const {fields, onSubmit, register, submitText} = props;
  return (
    <Container className={module.simpleFormContainer}>
      <Form
        onSubmit={onSubmit}
      >
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