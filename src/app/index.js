import React from 'react';
import css from './style.scss';

import Home from 'views/home';
import Demo from 'views/demo';
import NotFound from 'views/not-found';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Switch className={css.module}>
        <Route exact path="/" component={Home} />
        <Route path="/demo" component={Demo} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
