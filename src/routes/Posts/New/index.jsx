import React from 'react';
import { Header, Container } from 'semantic-ui-react';

import PostForm from '../../../components/PostForm';

export default function PostsNewRoute() {
  return (
    <Container text className="PostsNewRoute">
      <Header as="h1" textAlign="center">Create new Post</Header>
      <PostForm />
    </Container>
  );
}
