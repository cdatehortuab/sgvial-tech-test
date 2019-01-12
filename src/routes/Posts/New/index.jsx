import React from 'react';
import { Header, Container } from 'semantic-ui-react';

import PostFormContainer from '../../../containers/PostForm';

export default function PostsNewRoute() {
  return (
    <Container text className="PostsNewRoute">
      <Header as="h1" textAlign="center">Create new Post</Header>
      <PostFormContainer />
    </Container>
  );
}
