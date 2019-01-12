import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function AppMenu({
  showAs, showHeader, className, ...props
}) {
  const Component = showAs;
  const completeClassName = `AppMenu ${className || ''}`;
  return (
    <Component className={completeClassName} {...props}>
      {showHeader && (
        <Component.Item as={Link} to="/"><strong>CRUD Posts App</strong></Component.Item>
      )}
      <Component.Item as={NavLink} to="/posts" exact>View all posts</Component.Item>
      <Component.Item as={NavLink} to="/posts/new" exact>Create new post</Component.Item>
    </Component>
  );
}
