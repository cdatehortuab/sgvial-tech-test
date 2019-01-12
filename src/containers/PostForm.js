import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import PostForm from '../components/PostForm';

function mapStateToProps({ posts }, { postId }) {
  const post = posts.get(postId);
  const initialValues = post ? {
    title: post.get('title'),
    body: post.get('body'),
  } : {};
  return {
    initialValues,
  };
}

export default connect(mapStateToProps)(reduxForm({
  form: 'post',
})(PostForm))
