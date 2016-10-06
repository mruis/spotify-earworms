import React, { Component } from 'react';

var loginImage = require('../log_in.png');

export default class Login extends React.Component {

  render() {
    return (
      <div className="login">
        <h2 className="login-text">Log in below to see your Spotify Earworms!</h2>
        <a className="login-button" href="/login"><img src={loginImage}/></a>
      </div>
    );
  }

}
