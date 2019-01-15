import React from 'react';
import { Redirect } from 'react-router-dom';
import { Segment, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import NotFound from '../components/NotFound';

import { fetchPost } from '../redux/actions';

function mapStateToProps({ posts, fetchingPosts }, { match: { params: { postId } } }) {
  const formattedPostId = `${postId}`;
  return {
    postId: formattedPostId,
    post: posts.get(formattedPostId),
    isFetchingPost: fetchingPosts.has(formattedPostId),
  };
}

const mapDispatchToProps = {
  fetchPost,
};

class FetchingPostComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchStarted: false,
    };
  }

  componentDidMount() {
    const { fetchPost, postId } = this.props;
    fetchPost(postId);
    this.setState({ fetchStarted: true });
  }

  render() {
    const { props: { Component, ...props }, state: { fetchStarted } } = this;
    const { post, isFetchingPost } = props;
    const showLoader = !post || isFetchingPost;
    const foundOrFetchingPost = showLoader ? (
      <Segment placeholder>
        <Loader active={showLoader}>Loading post</Loader>
      </Segment>
    ) : (
      <Component {...props} />
    );
    return fetchStarted && !isFetchingPost && !post ? (
      <NotFound />
    ) : foundOrFetchingPost;
  }
}

export default function connectFetchingPostComponent(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(
    props => React.createElement(FetchingPostComponent, { Component, ...props }),
  );
}
