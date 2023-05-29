import { BASE__URL, HEADER_API_KEY } from './apiConfig';

export function fetchBreeds(breedId) {
  const catPromise = fetch(
    `${BASE__URL}/images/search?breed_ids=${breedId}`,
    HEADER_API_KEY
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

  return catPromise;
}
