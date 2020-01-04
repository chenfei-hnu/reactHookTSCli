import React from 'react';
import List from './List';
import { RouteComponentProps } from '@reach/router';


export default function Home(_: RouteComponentProps) {
  return (
    <div className="home-page">
      <List />
    </div>
  );
}
