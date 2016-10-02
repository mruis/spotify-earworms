import React, { Component } from 'react';

export default class SpotifyLogin extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <div className="spotify-login">
        <div className="page-content">
          {children}
        </div>
      </div>
    );
  }
}
