import React from "react";
import {Button, Container, Form, Alert} from "react-bootstrap";
import {useForm} from "react-hook-form";

import module from './form.module.scss';

export function SimpleForm(props) {
  const {handleSubmit, register} = useForm();
  const {errors, fields, onSubmit, submitText} = props;
  return (
    <Container className={module.simpleFormContainer}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors && Object.keys(errors).map((key, index) => {
          return (
            <Alert key={index} variant='danger'>
              {errors[key].message}
            </Alert>
          )
        })}
        {
          fields.map(field => {
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
                  { ...( field.selection && { as: "select" } ) }
                >
                  {field.selection && field.selection.map(item => (
                    <option key={item}>{item}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            )
          })
        }
        <Button type="submit">{submitText}</Button>
      </Form>
    </Container>
  )
}
