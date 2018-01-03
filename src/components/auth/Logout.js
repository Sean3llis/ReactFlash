import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { app } from '../../firebase';

class Logout extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }
  handleFormSubmit(e) {
    e.preventDefault();
  }
  componentWillMount() {
    app.auth().signOut().then(user => {
      this.setState({ redirect: true });
    });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>
    }
    return (
      <div className="container">
        <div className="logout">
          logout
        </div>
      </div>
    );
  }
}

export default Logout;
