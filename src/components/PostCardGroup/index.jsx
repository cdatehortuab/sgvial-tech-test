import React from 'react';
import { Card, Segment, Header } from 'semantic-ui-react';

import PostCard from '../PostCard';

export default function PostCardGroup({ posts }) {
  const postCards = posts.map(post => (
    <PostCard key={post.get('id')} post={post} />
  )).toList();

  return postCards.size === 0 ? (
    <Segment placeholder>
      <Header icon>
        There are no posts
      </Header>
    </Segment>
  ) : (
    <Card.Group className="PostCardGroup" itemsPerRow={3} doubling stackable>
      {postCards}
    </Card.Group>
  );
}
