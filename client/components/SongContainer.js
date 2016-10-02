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
            songNumber: 0, volume: 20
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

    handleOnPlaying(position, duration) {
        /*
        if (this.state.volume < 20) { //position.position > 3000) {
            this.setState({
                volume: this.state.volume+5
            });
        }
        if (this.state.volume <= 20 && this.state.volume > 0 && position.position > 25000) { //position.position > 3000) {
            this.setState({
                volume: this.state.volume-5
            });
        }
        */
    }

    handleSongFinished() {
        this.handleNextClick();
    }

    render() {
        const { accessToken, refreshToken, user } = this.props;
        const { loading, items, total, limit, offset, previous, next } = user;
        const { album, artists, disc_number, duration_ms, explicit, external_ids, external_urls, href, id, is_playable, name, popularity, preview_url, track_number, type, uri } = items[this.state.songNumber];
        const imageUrl = album ? album.images[0].url : "";

        if (loading) {
            return <h2>Loading...</h2>;
        }
        return (
            <div className="content-container">
                <h2 className="motivational-text">Here, have an earworm.</h2>
                <div className="content">
                    <PrevNextButton style="left" onClick={this.handlePrevClick.bind(this)}/>
                    <Song artist={artists[0].name} song={name} url={imageUrl} />
                    <Sound url={preview_url} playStatus={Sound.status.PLAYING} volume={this.state.volume} onPlaying={this.handleOnPlaying.bind(this)} onFinishedPlaying={this.handleSongFinished.bind(this)} />
                    <PrevNextButton style="right" onClick={this.handleNextClick.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(SongContainer);
