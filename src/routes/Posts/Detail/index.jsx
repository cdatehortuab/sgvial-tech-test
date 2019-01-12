import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PostsDetailHomeRoute from './Home';
import PostsDetailEditRoute from './Edit';

export default function PostsDetailRoute({ match }) {
  const { path } = match;
  return (
    <div className="PostsDetailRoute">
      <Switch>
        <Route path={`${path}/edit`} component={PostsDetailEditRoute} />
        <Route path={path} exact component={PostsDetailHomeRoute} />
      </Switch>
    </div>
  );
}
