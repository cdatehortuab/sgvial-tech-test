import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import PostCardGroupContainer from '../../../containers/PostCardGroup';

export default function PostsHomeRoute() {
  return (
    <div className="PostsHomeRoute">
      <Header as="h1" icon textAlign="center">
        <Icon name="file text" />
        Posts
      </Header>
      <PostCardGroupContainer />
    </div>
  );
}
