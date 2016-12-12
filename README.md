# Display your Spotify top tracks - "earworms"

https://spotify-earworms.herokuapp.com/

A little toy to display one's Spotify top tracks, which I found having been my
recent earworms. Implemented in React, using
[kauffecup's spotify-react-router-auth][ksr] as the basis, modified heavily
frontend-wise.

![Picture of app](example_earworm.png?raw=true)

## Setup and running

See [Spotify's Getting Started Guide][sgs]. Create your own Spotify application
and put the client id and secret in `server/routes.js`.

Init npm, after which run in dev mode:
$ npm run dev

[sgs]: https://developer.spotify.com/web-api/tutorial/
[ksr]: https://github.com/kauffecup/spotify-react-router-auth
