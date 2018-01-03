import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Logo from './Logo';

class Nav extends Component {
  render() {    
    if (this.props.auth.loggedIn) {
      return (
        <nav className="nav">
          <div className="container">
            <Link to="/logout">Log Out</Link>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="nav">
          <div className="container">
            <Link to="/login">Log In</Link>
          </div>
        </nav>
      )
    }
  }
}

export default connect(({auth}) => {  
  return { auth }
})(Nav)
