import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostsHomeRoute from './Home';
import PostsNewRoute from './New';
import PostsDetailRoute from './Detail';

export default function PostsRoute({ match }) {
  const { path } = match;
  return (
    <div className="PostsRoute">
      <Switch>
        <Route path={`${path}/new`} component={PostsNewRoute} />
        <Route path={`${path}/:postId`} component={PostsDetailRoute} />
        <Route path={path} exact component={PostsHomeRoute} />
      </Switch>
    </div>
  );
}
