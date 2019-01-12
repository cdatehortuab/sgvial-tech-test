import React from 'react';

import PostEditContainer from '../../../../containers/PostEdit';

export default function PostsDetailEditRoute({ match }) {
  const { postId } = match.params;
  return <PostEditContainer className="PostsDetailEditRoute" postId={postId} />;
}
