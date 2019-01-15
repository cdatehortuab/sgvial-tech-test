import React from 'react';
import { Link } from 'react-router-dom';
import {
  Segment, Header, Icon, Button,
} from 'semantic-ui-react';

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="exclamation triangle" />
        Not Found
      </Header>
      <Button primary size="large" as={Link} to="/">Go to Home page</Button>
    </Segment>
  );
}
