import React from 'react';
import { Router } from '@reach/router';
import Home from '../components/Home';

export function Routes() {
  return (
    <React.Fragment>
      <Router>
        <Home default />
        <Home path="/home" />
      </Router>
    </React.Fragment>
  )
}