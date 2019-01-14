import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PostCardGroupContainer from '../../../containers/PostCardGroup';

import './style.css';

export default function PostsHomeRoute() {
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
      <PostCardGroupContainer />
    </div>
  );
}
