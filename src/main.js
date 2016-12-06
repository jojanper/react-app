import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
import About from './About.js';
import Home from './Home.js';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
  </Route>
);

let mount = document.getElementById('root');
ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, mount);
