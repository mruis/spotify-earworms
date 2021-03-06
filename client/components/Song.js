import React from 'react';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Song extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="songinfo">
                <div className="image-container">
                    <ReactCSSTransitionGroup transitionName="change-song"
                                             transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        <img src={this.props.url} key={this.props.url} className="track-image"/>
                        <div className="play-stop">
                            <a className="btn btn-default btn-circle btn-playstop" onClick={this.props.onPlayStopClick}>
                                <span className={"glyphicon glyphicon-" + this.props.style}></span>
                            </a>
                        </div>
                    </ReactCSSTransitionGroup>
                </div>

                <div className="info-container">
                    <h3 className="song-title">{this.props.song}</h3>
                    <h4 className="artist-title">{this.props.artist}</h4>
                </div>
            </div>
        );
    }

}