import { connect } from 'react-redux';

import PostDetail from '../components/PostDetail';

function mapStateToProps({ posts }, { postId }) {
  return {
    post: posts.get(postId),
  };
}

export default connect(mapStateToProps)(PostDetail);
