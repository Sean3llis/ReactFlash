import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { authenticateUser, deauthenticateUser } from './reducers/auth';

import FlashForm from './components/FlashForm';
import FlashcardList from './components/FlashcardList';
import Nav from './components/Nav';
import Login from './components/auth/Login';
import { app } from './firebase';


class ReactFlash extends Component {
  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.authenticateUser(user)
      } else {
        this.props.deauthenticateUser()
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
            <Login />
            <FlashForm />
            <FlashcardList />
          </div>
        </Router>
        <Nav />
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

export default connect(null, mapDispatchToProps)(ReactFlash)
