import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import PostForm from '../../../../components/PostForm';

export default function PostsDetailEditRoute({ post }) {
  return (
    <Container text className="PostsDetailEditRoute">
      <Header as="h1" textAlign="center">
        Editing post:
        {` ${post.get('title')}`}
      </Header>
      <PostForm post={post} />
    </Container>
  );
}
