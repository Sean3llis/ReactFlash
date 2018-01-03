import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { authenticateUser, deauthenticateUser } from './reducers/auth';

import Nav from './components/Nav';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Decks from './components/Decks';
import { app } from './firebase';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  console.log('1authenticated ~~>', authenticated);
  return (
    <Route {...rest} render={(props) => {
      console.log('2authenticated ~~>', authenticated);
      return authenticated
        ? <Component {...props} />
        : <Redirect to='/login' />
    }} />
  )
}

class ReactFlash extends Component {
  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.authenticateUser(user);
      } else {
        this.props.deauthenticateUser();
      }
    });
  }
  componentWillUnmount() {
    this.removeAuthListener();
  }
  render() {
    return (
      <div id="reactflash">
        <Router>
          <div>
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/' render={(props) => (
              this.props.auth.loggedIn
                ? <Redirect to='/decks' />
                : <Login {...props} />
            )} />
            <PrivateRoute
              path='/decks'
              authenticated={this.props.auth.loggedIn}
              component={Decks} />
            <Nav />
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (user) => dispatch(authenticateUser(user)),
    deauthenticateUser: () => dispatch(deauthenticateUser()),
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, mapDispatchToProps)(ReactFlash);
