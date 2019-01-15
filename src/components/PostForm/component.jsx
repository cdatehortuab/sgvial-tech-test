import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Button, Icon, Input, TextArea,
} from 'semantic-ui-react';
import { Field } from 'redux-form';

import FormField from '../FormField';

export default function PostForm({
  postId,
  handleSubmit,
  pristine,
  submitting,
  reset,
}) {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="title"
        component={FormField}
        inputId="titlePostInput"
        label="Title"
        required
        showAs={Input}
        placeholder="Post title"
        type="text"
      />
      <Field
        name="body"
        component={FormField}
        inputId="bodyPostInput"
        label="Body"
        required
        showAs={TextArea}
        placeholder="Post title"
      />
      <Button circular color="green" type="submit" disabled={submitting} loading={submitting}>
        {!submitting ? (
          <React.Fragment>
            <Icon name="save" />
            Save
          </React.Fragment>
        ) : 'Saving'}
      </Button>
      <Button primary circular type="button" disabled={pristine || submitting} onClick={reset}>
        Reset form
      </Button>
      <Button circular as={Link} to={postId ? `/posts/${postId}` : '/posts'}>
        <Icon name="cancel" />
        Cancel
      </Button>
    </Form>
  );
}
