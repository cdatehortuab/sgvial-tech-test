import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, Button, Icon,
} from 'semantic-ui-react';

import DeletePostButton from '../../../../components/DeletePostButton';

import './style.css';

export default function PostsDetailHomeRoute({ post }) {
  const paragraphs = post && post.get('body').split('\n');
  return (
    <Container text className="PostsDetailHomeRoute">
      <Header as="h1" className="PostsDetailHomeRoute__title">
        {post.get('title')}
      </Header>
      <div className="PostsDetailHomeRoute__body">
        {paragraphs.map((paragraph, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="PostsDetailHomeRoute__actions">
        <Button circular as={Link} to={`/posts/${post.get('id')}/edit`} title="Edit post">
          <Icon name="pencil" />
          Edit post
        </Button>
        <DeletePostButton circular showAs={Button} color="red" title="Delete post" postId={post.get('id')}>
          <Icon name="delete" />
          Delete post
        </DeletePostButton>
      </div>
    </Container>
  );
}
