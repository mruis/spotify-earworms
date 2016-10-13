import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_TRACKS_BEGIN = 'SPOTIFY_TRACKS_BEGIN';
export const SPOTIFY_TRACKS_SUCCESS = 'SPOTIFY_TRACKS_SUCCESS';
export const SPOTIFY_TRACKS_FAILURE = 'SPOTIFY_TRACKS_FAILURE';
export const MAX_SONGS = 25;

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

export function getMyTopTracks() {
  return dispatch => {
    dispatch({ type: SPOTIFY_TRACKS_BEGIN});
    spotifyApi.getMyTopTracks({limit: MAX_SONGS.toString() }).then(data => {
      dispatch({ type: SPOTIFY_TRACKS_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_TRACKS_FAILURE, error: e });
    });
  };
}
