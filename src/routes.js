import React from 'react';
import { Router, Route } from 'react-router';
import 'whatwg-fetch';

import App from './App';
import About from './About';
import NotFound from './NotFound';

function getData(nextState, replaceState, next) {
  fetch('http://httpbin.org/delay/3')
    .then((response) => {
      console.log('response', response.url);
      next()
    })
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} onEnter={getData} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
