import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, Button, Icon,
} from 'semantic-ui-react';

import DeletePostButtonContainer from '../../containers/DeletePostButton';

import './style.css';

export default function PostDetail({ post }) {
  const paragraphs = post.get('body').split('\n');
  return (
    <Container text className="PostDetail">
      <Header as="h1" className="PostDetail__title">
        {post.get('title')}
      </Header>
      <div className="PostDetail__body">
        {paragraphs.map((paragraph, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="PostDetail__actions">
        <Button circular as={Link} to={`/posts/${post.get('id')}/edit`} title="Edit post">
          <Icon name="pencil" />
          Edit post
        </Button>
        <DeletePostButtonContainer circular showAs={Button} color="red" title="Delete post" postId={post.get('id')}>
          <Icon name="delete" />
          Delete post
        </DeletePostButtonContainer>
      </div>
    </Container>
  );
}
