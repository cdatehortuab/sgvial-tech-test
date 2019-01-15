import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import AppMenu from '../../components/AppMenu';

import PostsRoute from '../Posts';
import HomeRoute from '../Home';
import NotFound from '../../components/NotFound';

import './style.css';

export default function AppRoute() {
  return (
    <Container className="AppRoute">
      <AppMenu showAs={Menu} showHeader inverted />
      <Switch>
        <Route path="/posts" component={PostsRoute} />
        <Route path="/" exact component={HomeRoute} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}
