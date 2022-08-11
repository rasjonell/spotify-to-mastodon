import SpotifyAPI from 'spotify-web-api-node';

const SpotifyClient = new SpotifyAPI({
  clientId: '<YOUR CLIENT ID>',
  clientSecret: '<YOUR CLIENT SECRET>',
  accessToken: '<YOUR ACCESS TOKEN>',
  refreshToken: '<YOUR REFRESH TOKEN>',
});

export default SpotifyClient;
