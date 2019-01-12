import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import PostFormContainer from '../../containers/PostForm';

export default function PostEdit({ post }) {
  return (
    <Container text className="PostEdit">
      <Header as="h1" textAlign="center">
        Editing post:
        {` ${post.get('title')}`}
      </Header>
      <PostFormContainer postId={post.get('id')} />
    </Container>
  );
}
