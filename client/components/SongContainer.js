import React, { Component } from 'react';
import { connect }      from 'react-redux';
import Sound from 'react-sound';
import {
    getMyTopTracks,
    setTokens,
}   from '../actions/actions';
import Song from './Song';
import PrevNextButton from './PrevNextButton';



class SongContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            songNumber: 0, volume: 0
        };
    }

    componentDidMount() {
        const {dispatch, params} = this.props;
        const {accessToken, refreshToken} = params;
        dispatch(setTokens({accessToken, refreshToken}));
        dispatch(getMyTopTracks());
    }

    handlePrevClick() {
        this.setState({
            songNumber: this.state.songNumber > 0 ? this.state.songNumber-1 : 0
        });
    }

    handleNextClick() {
        this.setState({
            songNumber: this.state.songNumber < 50 ? this.state.songNumber+1 : 50
        });

    }

    handleSongFinished() {
        this.handleNextClick();
    }

    render() {
        const { loading, items } = this.props.songs;
        const { album, artists, name, preview_url } = items[this.state.songNumber];
        const imageUrl = album ? album.images[0].url : "";

        if (loading) {
            return <h2>Loading...</h2>;
        }
        return (
            <div className="song-container">
                <h2 className="motivational-text">Here, have an earworm.</h2>
                <div className="content">
                    <PrevNextButton style="left" onClick={this.handlePrevClick.bind(this)}/>
                    <Song artist={artists[0].name} song={name} url={imageUrl} />
                    <Sound url={preview_url} playStatus={Sound.status.PLAYING} volume={this.state.volume}
                           onFinishedPlaying={this.handleSongFinished.bind(this)} />
                    <PrevNextButton style="right" onClick={this.handleNextClick.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(SongContainer);
