import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { app, facebookProvider } from '../../firebase';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }
  handleFormSubmit(e) {
    e.preventDefault();
  }
  authWithFacebook() {
    console.table([{
      email: this.refs.email.value,
      password: this.refs.password.value,
    }]);
      app.auth().signInWithPopup(facebookProvider)
      .then((result, error) => {
        debugger;
        if (error) {
          console.log(error)
          return;
        }
        this.setState({ redirect: true });
      });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>
    }
    return (
      <div className="container">
        <div className="login">
          <button onClick={this.authWithFacebook.bind(this)} className="button">Facebook</button>
          <div className="login__message">No message.</div>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <label htmlFor="email">Email</label>
            <input ref="email" type="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input ref="password" type="password" name="password"/>
            <button type="submit" className="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
