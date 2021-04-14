import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
// import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import Welcome from './Pages/Signup/Welcome/Welcome';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    );
  }
}
