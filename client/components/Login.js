import React, { Component } from 'react';

var loginImage = require('../log_in.png');

export default class Login extends React.Component {

  render() {
    return (
      <div className="login">
        <h2 className="login-text">You have some earworms waiting for you. Log in below to see them!</h2>
        <a className="login-button" href="/login"><img src={loginImage}/></a>
      </div>
    );
  }

}
