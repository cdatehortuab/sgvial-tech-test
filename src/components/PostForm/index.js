import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PostForm from './component';

function validate(post) {
  const errors = {};
  if (!post.title) {
    errors.title = 'You must provide a title';
  } else if (post.title.length > 100) {
    errors.title = 'Title can not exceed 100 characters in length';
  }

  if (!post.body) {
    errors.body = 'You must provide a body';
  }

  return errors;
}

function mapStateToProps(_state, { post }) {
  const initialValues = post ? {
    title: post.get('title'),
    body: post.get('body'),
  } : {};
  return {
    initialValues,
  };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function mapDispatchToProps() {
  return {
    async onSubmit(post) {
      await sleep(500); // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(post, null, 2)}`);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'post',
  validate,
})(PostForm));
