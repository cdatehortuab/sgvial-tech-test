import React from 'react';
import { Form, Label } from 'semantic-ui-react';

export default function PostFormField({
  inputId,
  input,
  label,
  required,
  meta,
  showAs,
  ...inputProps
}) {
  const { touched, error } = meta;
  const Component = showAs;
  return (
    <Form.Field required={required} error={touched && !!error}>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label htmlFor={inputId}>{label}</label>
      <Component id={inputId} {...input} {...inputProps} />
      {touched && error && <Label basic color="red" pointing>{error}</Label>}
    </Form.Field>
  );
}
