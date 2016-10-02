import React, { Component } from 'react';
import loginSVG from '../log_in.svg';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <h2>Log in below to see your Spotify Earworms!</h2>
        <a className="login-button" href="/login" dangerouslySetInnerHTML={{__html: loginSVG}}></a>
      </div>
    );
  }
}
