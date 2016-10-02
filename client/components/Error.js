import React, { Component } from 'react';

export default class Error extends React.Component {
  render() {
    const { errorMsg } = this.props.params;
    return (
      <div className="error">
        <h2>An Error Occurred</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}
