import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { Route, Link, withRouter, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import FriendsListView from './views';

import { login } from './actions';

class App extends Component {
  render() {
    return (
    <>
    <ul>
      <li>
        {!localStorage.getItem('token') && <Link to="/login/">Login Now</Link>}
        {localStorage.getItem('token') && <Link to="/logout/">Logout</Link>}
      </li>
    </ul>
    <h1>Friends App</h1>
    <Route path="/login/" render={ props => <LoginPage login={this.props.login}/>}/>
    <Route path="/logout/" render={ props => {
      localStorage.clear()
      return (<Redirect to="/login" />)
    }}/>
    <PrivateRoute path="/friendslist" component={FriendsListView} />
    </>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default withRouter(connect(
  mapStateToProps,
  {
    login
  }
)(App));