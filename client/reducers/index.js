import {
  SPOTIFY_TOKENS, SPOTIFY_TRACKS_BEGIN, SPOTIFY_TRACKS_SUCCESS, SPOTIFY_TRACKS_FAILURE
} from '../actions/actions';

/** The initial state; no tokens and no user info */
const initialState = {
  accessToken: null,
  refreshToken: null,
  songs: {
    loading: false,
    items: [{
      album: null,
      artists: [
          {
            external_urls: null,
            href: null,
            id: null,
            name: null,
            type: null,
            uri: null,
          }],
      disc_number: null,
      duration_ms: null,
      explicit: false,
      external_ids: null,
      external_urls: null,
      href: null,
      id: null,
      is_playable: false,
      name: null,
      popularity: null,
      preview_url: null,
      track_number: null,
      type: null,
      uri: null,
    }],
    total: null,
    limit: null,
    offset: null,
    href: null,
    previous: null,
    next: null,
  }
};

/**
 * Our reducer
 */
export default function reduce(state = initialState, action) {
  switch (action.type) {
  // when we get the tokens... set the tokens!
  case SPOTIFY_TOKENS:
    const {accessToken, refreshToken} = action;
    return Object.assign({}, state, {accessToken, refreshToken});

  // set our loading property when the loading begins
  case SPOTIFY_TRACKS_BEGIN:
    return Object.assign({}, state, {
      songs: Object.assign({}, state.songs, {loading: true})
    });

  // when we get the data merge it in
  case SPOTIFY_TRACKS_SUCCESS:
    return Object.assign({}, state, {
      songs: Object.assign({}, state.songs, action.data, {loading: false})
    });

  // currently no failure state :(
  case SPOTIFY_TRACKS_FAILURE:
    return state;

  default:
    return state;
  }
}
