import React, { Component } from 'react';
import { connect }      from 'react-redux';
import Sound from 'react-sound';
import {
    getMyTopTracks,
    setTokens,
}   from '../actions/actions';
import Song from './Song';
import PrevNextButton from './PrevNextButton';
import { MAX_SONGS } from '../actions/actions';

class SongContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            songNumber: 0, volume: 15
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
            songNumber: this.state.songNumber < MAX_SONGS-1 ? this.state.songNumber+1 : MAX_SONGS-1
        });

    }

    handleSongFinished() {
        this.handleNextClick();
    }

    definePrevButton() {
        let style = "left";
        if (this.state.songNumber == 0) {
            style = style + " disabled";
        }
        return <PrevNextButton style={style} enabled={true} onClick={this.handlePrevClick.bind(this)}/>;
    }

    defineNextButton() {
        let style = "right";
        if (this.state.songNumber == MAX_SONGS-1) {
            style = style + " disabled";
        }
        return <PrevNextButton style={style} onClick={this.handleNextClick.bind(this)}/>;
    }

    defineSoundElement(preview_url) {
        if (preview_url != null) {
            return (<Sound url={preview_url}
                           playStatus={Sound.status.PLAYING}
                           volume={this.state.volume}
                           onFinishedPlaying={this.handleSongFinished.bind(this)} />
                    );
        } else {
            return null;
        }
    }

    render() {
        const { loading, items } = this.props.songs;
        const { album, artists, name, preview_url } = items[this.state.songNumber];
        const imageUrl = album ? album.images[0].url : "";

        if (loading) {
            return <h2>Loading...</h2>;
        }

        const soundElement = this.defineSoundElement(preview_url);
        const prevButton = this.definePrevButton();
        const nextButton = this.defineNextButton();

        return (
            <div className="content">
                <h2>Here, have some earworms.</h2>
                {prevButton}
                <Song artist={artists[0].name} song={name} url={imageUrl} />
                {soundElement}
                {nextButton}
            </div>
        );
    }

}

export default connect(state => state)(SongContainer);