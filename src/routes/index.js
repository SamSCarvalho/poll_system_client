import React from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';

// PAGES
import ListPolls from '../containers/ListPolls';
import ViewPoll from '../containers/ViewPoll';
import CreatePoll from '../containers/CreatePoll';


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={ListPolls} />
      <Route path="/poll/:id" component={ViewPoll} />
      <Route path="/create" component={CreatePoll} />
    </Switch>
  </Router>
);

export default Routes;