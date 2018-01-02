import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';

class Nav extends Component {
  render() {
    console.log(this.props)
    return (
      <nav className="nav">
        <div className="container">
        <Logo />
        {this.props.auth.loggedIn &&
          <img src={this.props.auth.user.photoURL} alt="avatar" />
        }
        </div>
      </nav>
    )
  }
}

export default connect((state) => {
  return { auth: state.auth }
})(Nav)
