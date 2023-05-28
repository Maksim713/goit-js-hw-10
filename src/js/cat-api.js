import { refs, download, downloadBreeds } from './Download.js';

const BASE__URL = 'https://api.thecatapi.com/v1';
const API__KEY =
  'live_lbd7kiCF70ss6000iikq8FDmg6o2AFTxDkg6JpDJGswpDbKjkyKuFCdFunJLwuf5';
const HEADER_API_KEY = {
  headers: {
    'x-api-key': API__KEY,
  },
};

export function fetchBreeds() {
  downloadBreeds();
  return fetch(`${BASE__URL}/breeds`, HEADER_API_KEY).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  refs.catInfo.classList.add('is-hidden');
  download();
  return fetch(
    `${BASE__URL}/images/search?breed_ids=${breedId}`,
    HEADER_API_KEY
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
