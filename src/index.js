import { fillingInfoAboutCat, fillInTheSelected } from './js/filling';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';
import { refs, uploadedBreeds, uploaded, loadError } from './js/Download.js';

refs.input.addEventListener('change', onInputChange);

function onInputChange(e) {
  const selectValue = e.currentTarget.value;

  if (selectValue === '') {
    loadError();
    refs.infoConteiner.classList.add('is-hidden');
    return;
  }

  fetchCatByBreed(selectValue)
    .then(response => {
      const url = response[0].url;
      const breed = response[0].breeds[0];
      fillingInfoAboutCat({ url, breed });
      uploaded();
    })
    .catch(loadError);
}

fetchBreeds()
  .then(response => {
    uploadedBreeds();
    fillInTheSelected(response);
  })
  .catch(loadError);
