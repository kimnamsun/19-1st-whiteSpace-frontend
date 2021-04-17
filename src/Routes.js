import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Nav from './Components/Nav/Nav';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/products" component={ProductDetail} />

          {/* 
          <Route exact path="/login" component={Login} />
 */}

          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}
