import React from 'react';
import { Header, Icon, List } from 'semantic-ui-react';

import AppMenu from '../../components/AppMenu';

import './style.css';

export default function HomeRoute() {
  return (
    <div className="HomeRoute">
      <Header as="h1" icon textAlign="center">
        <Icon name="file text" />
        Welcome to CRUD Posts App
        <Header.Subheader>Click above links to start</Header.Subheader>
      </Header>
      <AppMenu showAs={List} className="HomeRoute__AppMenu" />
    </div>
  );
}
