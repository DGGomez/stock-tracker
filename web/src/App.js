import React, { Component } from 'react';
import {Provider} from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {connect} from "react-redux";

import WelcomePage from './pages/start-page';
import SignupPage from './pages/sign-up';
import SigninPage from './pages/sign-in';
import MainPage from './pages/main-check';
import StockPage from './pages/add-stock';

import './App.css';

import { tokenLogin } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.tokenLogin();
  }

  render() {
    return (
          <Router>
            <div>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/signup" exact component={SignupPage} />
                <Route path="/signin" exact component={SigninPage} />
                <Route path="/main" exact component={MainPage} />
                <Route path="/stocks" exact component={StockPage} />

            </div>
          </Router> 
    );
  }
}

export default connect(null, { tokenLogin })(App);
