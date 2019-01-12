import React from 'react';
import { Card } from 'semantic-ui-react';

import PostCard from '../PostCard';

export default function PostCardGroup({ posts }) {
  const postCards = posts.map(post => (
    <PostCard key={post.get('id')} post={post} />
  )).toList();

  return (
    <Card.Group className="PostCardGroup" itemsPerRow={3}>
      {postCards}
    </Card.Group>
  );
}
