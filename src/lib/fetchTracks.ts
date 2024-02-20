import { SavedTrack } from 'spotify-types';
const apiToken = 'BQCS2XYn9HB9qDZeiXJUgJzqobLWyY9y52PNBYylC2N2nZeV6fFFOtHXl9yBrAzz6D8MeBGvX11YeCMgo0T_1u7IcNULKPibLqN9KPSnl_eFdlMLkYFXx1kwB_k5NZQY70vA9mtJ4-ROIuCBwUNnaO2iEq6Llm1D3ERjl_D5VVpTvVYcwTWZkezv0cl8jpoEtKFUi6g3Bv9uQ-XJZ7gVqENNWOlXOg';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: SavedTrack[] };

  return data.items;
};