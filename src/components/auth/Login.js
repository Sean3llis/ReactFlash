import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../Logo';
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
      app.auth().signInWithPopup(facebookProvider)
      .then((result, error) => {
        if (error) {
          console.log(error)
          return;
        }
        this.setState({ redirect: true });
      });
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.state.redirect) {
      return <Redirect to={from}></Redirect>
    }
    return (
      <div className="container">
        <div className="Login">
          <Logo></Logo>
          <button onClick={this.authWithFacebook.bind(this)} className="button">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </button>
          <div className="Login__message">No message.</div>
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
