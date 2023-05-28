import {
  refs,
  uploadedBreeds,
  uploaded,
  downloadError,
} from './js/download.js';
import { fillingInfoAboutCat, fillInTheSelected } from './js/filling.js';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

refs.input.addEventListener('change', onInputChange);

function onInputChange(e) {
  const currentValue = e.currentTarget.value;

  if (currentValue === '') {
    downloadError();
    refs.infoConteiner.classList.add('is-hidden');
    return;
  }

  fetchCatByBreed(currentValue)
    .then(response => {
      const url = response[0].url;
      const breed = response[0].breeds[0];
      fillingInfoAboutCat({ url, breed });
      uploaded();
    })
    .catch(downloadError);
}

fetchBreeds()
  .then(response => {
    uploadedBreeds();
    fillInTheSelected(response);
  })
  .catch(downloadError);
