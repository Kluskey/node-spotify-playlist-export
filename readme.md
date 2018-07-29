# node-spotify-playlist-export
#### A simple NodeJS tool to export all song names & artists from a Spotify playlist.

### Setup

0. (Make sure `node` and `npm` are installed).
1. Run `npm install`
2. [Create a new Spotify app of your own here and grab the Client ID and Client Secret.](http://developer.spotify.com/)
2. Create a `.env` file and add:
```
clientId=YOUR_SPOTIFY_CLIENT_ID
clientSecret=YOUR_SPOTIFY_CLIENT_SECRET
```
4. Paste the Playlist ID of your desired playlist into the `playlistId` at the top of the file.
5. Run `npm start` and your tracks will be saved with the title, artist, album, date added, and URL! All will be saved to a backup.txt file with information separated by pipe (`|`) characters.

Thanks! Let me know if you have any questions.