import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

import LoginPage from './components/LoginPage';
import FriendsListView from './views';

import { login } from './actions';

class App extends Component {
  render() {
    if (this.props.isLoggedIn) {
    return (
      <div className="App">
        <FriendsListView />
      </div>
    );
    } else {
      return (
        <div>
          <LoginPage onSubmit={this.props.login}/>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(
  mapStateToProps,
  {
    login
  }
)(App);
