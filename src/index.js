import {
  refs,
  uploadedBreeds,
  uploaded,
  downloadError,
  download,
  downloadBreeds,
} from './js/download.js';
import { fillingInfoAboutCat, fillInTheSelected } from './js/filling.js';
import { fetchBreeds } from './js/getInfo.js';
import { BASE__URL, HEADER_API_KEY } from './js/apiConfig.js';

refs.input.addEventListener('change', onInputChange);

function onInputChange(e) {
  const currentValue = e.currentTarget.value.trim();

  if (currentValue === '') {
    downloadError();
    refs.infoConteiner.classList.add('is-hidden');
    return;
  }

  refs.catInfo.classList.add('is-hidden');
  download();

  fetchBreeds(currentValue)
    .then(response => {
      const url = response[0].url;
      const breed = response[0].breeds[0];
      fillingInfoAboutCat({ url, breed });
      uploaded();
    })
    .catch(downloadError);
}

downloadBreeds();

const breedPromise = fetch(`${BASE__URL}/breeds`, HEADER_API_KEY).then(
  response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }
);

breedPromise
  .then(response => {
    uploadedBreeds();
    fillInTheSelected(response);
  })
  .catch(downloadError);
