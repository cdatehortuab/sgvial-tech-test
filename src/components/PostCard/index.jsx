import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Icon } from 'semantic-ui-react';

import DeletePostButtonContainer from '../../containers/DeletePostButton';

const MAX_DESCRIPTION_CHARS = 80;

export default function PostCard({ post }) {
  const postBody = post.get('body');
  const { length } = postBody;

  let postDescription;
  if (length <= MAX_DESCRIPTION_CHARS) {
    postDescription = postBody;
  } else {
    postDescription = `${postBody.substring(0, MAX_DESCRIPTION_CHARS - 3)}...`;
  }

  return (
    <Card className="PostCard">
      <Card.Content as="h2">
        <Card.Header as={Link} to={`/posts/${post.get('id')}`}>{post.get('title')}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>{postDescription}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button icon primary circular as={Link} to={`/posts/${post.get('id')}`} title="View post">
          <Icon name="eye" />
        </Button>
        <Button icon circular as={Link} to={`/posts/${post.get('id')}/edit`} title="Edit post">
          <Icon name="pencil" />
        </Button>
        <DeletePostButtonContainer showAs={Button} icon circular color="red" title="Delete post" postId={post.get('id')}>
          <Icon name="delete" />
        </DeletePostButtonContainer>
      </Card.Content>
    </Card>
  );
}
