import React from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';
import { Field } from 'redux-form';

export default function PostForm() {
  return (
    <Form>
      <Form.Field>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label htmlFor="title">Title</label>
        {/* eslint-enable jsx-a11y/label-has-associated-control */}
        <Field id="title" name="title" component="input" type="text" placeholder="Post title" />
      </Form.Field>
      <Form.Field>
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label htmlFor="body">Body</label>
        {/* eslint-enable jsx-a11y/label-has-associated-control */}
        <Field id="body" name="body" component="textarea" placeholder="Post text" />
      </Form.Field>
      <Button primary circular type="submit">
        <Icon name="save" />
        Save
      </Button>
    </Form>
  );
}
