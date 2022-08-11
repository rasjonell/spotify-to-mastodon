import fetch from 'node-fetch';

import SpotifyClient from './services/spotify';

(async () => {
  const result = await SpotifyClient.getMyCurrentPlayingTrack();

  if (result.body.item) {
    const item = result.body.item as SpotifyApi.TrackObjectFull;

    const value = item.name;
    const name = item.artists[0].name;

    const body = {
      fields_attributes: { 0: { name: 'Listening To', value: `${name} - ${value}` } },
    };

    try {
      const result = await fetch(
        'https://xn--69aa8bzb.xn--y9a3aq/api/v1/accounts/update_credentials',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer <YOUR MASTODON TOKEN HERE>',
          },
          body: JSON.stringify(body),
        },
      );

      console.log(await result.json());
    } catch (error) {
      console.log('fucky wucky', error);
    }
  } else {
    console.warn("Couldn't find a track", result);
  }
})();
