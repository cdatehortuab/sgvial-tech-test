import React from 'react';
import {
  Header, Icon, Button, Segment, Loader, Message,
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
    const {
      posts, isFetchingPosts, lastDeleted, location: { search },
    } = this.props;
    const isDeleteParamSuccess = (new URLSearchParams(search)).get('delete') === 'success';
    const showDeleteMessage = isDeleteParamSuccess || !!lastDeleted;
    return (
      <div className="PostsHomeRoute">
        {showDeleteMessage && (
          <Message success visible={showDeleteMessage}>
            <Message.Header>Success</Message.Header>
            <p>The post has been successfully deleted</p>
          </Message>
        )}
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
