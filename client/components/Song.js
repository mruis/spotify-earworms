import React from 'react';

export default class Song extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="songinfo">
            <div className="image-container">
                <div className="play-stop"></div>
                <img src={this.props.url} height="400px" width="400px" className="track-image"/>
            </div>
            <h3 className="song-title">{this.props.song}</h3>
            <h4 className="artist-title">{this.props.artist}</h4>
        </div>);
    }

}