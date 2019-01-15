import { connect } from 'react-redux';

import { FETCHING_ALL } from '../../../redux/reducers/fetchingPosts';
import { fetchPosts } from '../../../redux/actions';

import PostsHomeRoute from './component';

function mapStateToProps({ posts, fetchingPosts }) {
  return {
    posts,
    isFetchingPosts: fetchingPosts.has(FETCHING_ALL),
  };
}

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsHomeRoute);
