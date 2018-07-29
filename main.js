require('dotenv').config();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function(data) {
        // console.log('The access token expires in ' + data.body['expires_in']);
        // console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);

        runBackup();
    },
    function(err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

function runBackup() {

    spotifyApi.getPlaylist('kluskey', '5r9BATxFQONQs6EUdXncAX')
        .then(function(data) {
            // console.log('Some information about this playlist', data.body);
            let totalTracks = data.body.tracks.total;

            // console.log(items);

        }, function(err) {
            console.log('Something went wrong!', err);
        });
}