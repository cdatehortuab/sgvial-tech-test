import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form, Button, Icon, Input, TextArea, Message,
} from 'semantic-ui-react';
import { Field } from 'redux-form';

import FormField from '../FormField';

export default function PostForm({
  postId,
  handleSubmit,
  pristine,
  submitting,
  reset,
  submitSucceeded,
  submitFailed
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
      <Button circular color="green" type="submit" disabled={pristine || submitting} loading={submitting}>
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
      {submitSucceeded && (
        <Message visible={submitSucceeded} success>
          <Message.Header>Success</Message.Header>
          <p>The changes have been saved.</p>
        </Message>
      )}
      {submitFailed && (
        <Message visible={submitFailed} error>
          <Message.Header>Error</Message.Header>
          <p>There was an error while saving the post.</p>
        </Message>
      )}
    </Form>
  );
}
