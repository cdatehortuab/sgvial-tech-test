import React from 'react';

import PostDetailContainer from '../../../../containers/PostDetail';

export default function PostsDetailHomeRoute({ match }) {
  const { postId } = match.params;
  return (
    <div className="PostsDetailHomeRoute">
      <PostDetailContainer postId={postId} />
    </div>
  );
}
