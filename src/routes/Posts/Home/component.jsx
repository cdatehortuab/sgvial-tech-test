import React from 'react';
import {
  Header, Icon, Button, Segment, Loader,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PostCardGroup from '../../../components/PostCardGroup';

import './style.css';

export default class PostsHomeRoute extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts, isFetchingPosts } = this.props;
    return (
      <div className="PostsHomeRoute">
        <Header as="h1" icon textAlign="center">
          <Icon name="file text" />
          Posts
        </Header>
        <div className="PostsHomeRoute__actions">
          <Button circular color="green" as={Link} to="/posts/new">
            <Icon name="plus" />
            Create new post
          </Button>
        </div>
        {isFetchingPosts ? (
          <Segment placeholder>
            <Loader active={isFetchingPosts}>Loading posts</Loader>
          </Segment>
        ) : (
          <PostCardGroup posts={posts} />
        )}
      </div>
    );
  }
}
