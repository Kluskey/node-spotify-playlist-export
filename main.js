require('dotenv').config();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret
    // redirectUri: 'http://www.example.com/callback'
});

spotifyApi.getPlaylist('kluskey', '5r9BATxFQONQs6EUdXncAX')
    .then(function(data) {
        console.log('Some information about this playlist', data.body);
    }, function(err) {
        console.log('Something went wrong!', err);
    });