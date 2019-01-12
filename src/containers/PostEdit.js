import { connect } from 'react-redux';

import PostEdit from '../components/PostEdit';

function mapStateToProps({ posts }, { postId }) {
  return {
    post: posts.get(postId),
  };
}

export default connect(mapStateToProps)(PostEdit);
