import { refs } from './download.js';

export function fillingInfoAboutCat({ url, breed }) {
  refs.catImg.src = `${url}`;
  refs.breedTitle.textContent = `${breed.name}`;
  refs.breedDescription.textContent = `${breed.description}`;
  refs.breedTemtText.insertAdjacentHTML('beforeend', `${breed.temperament}`);
  refs.catInfo.classList.remove('is-hidden');
}

export function fillInTheSelected(breeds) {
  const breedSelect = breeds
    .map(({ id, name }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join(' ');
  refs.input.insertAdjacentHTML('beforeend', breedSelect);
}
