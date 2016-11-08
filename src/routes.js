import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './About';
import NotFound from './NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
