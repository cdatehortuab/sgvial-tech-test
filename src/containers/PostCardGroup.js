import { connect } from 'react-redux';

import PostCardGroup from '../components/PostCardGroup';

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}

export default connect(mapStateToProps)(PostCardGroup);
