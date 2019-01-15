import { connect } from 'react-redux';

import { FETCHING_ALL } from '../../../redux/reducers/fetchingPosts';
import { fetchPosts } from '../../../redux/actions';

import PostsHomeRoute from './component';

function mapStateToProps({ posts, fetchingPosts, lastDeleted }) {
  return {
    posts,
    isFetchingPosts: fetchingPosts.has(FETCHING_ALL),
    lastDeleted,
  };
}

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsHomeRoute);
