import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const refs = {
  input: document.querySelector('.breed-select'),
  loaderText: document.querySelector('.loader'),
  errorText: document.querySelector('.error'),
  catInfo: document.querySelector('.cat-info'),
  catImg: document.querySelector('.cat-info > img'),
  breedTitle: document.querySelector('.cat-info-title'),
  breedDescription: document.querySelector('.cat-info-description'),
  breedTemtText: document.querySelector('.cat-info-temperament-text'),
};

Notify.init({
  width: '400px',
});

export function downloadBreeds() {
  download();
  refs.input.classList.add('is-hidden');
}

export function uploadedBreeds() {
  uploaded();
  refs.input.classList.remove('is-hidden');
}

export function download() {
  refs.loaderText.classList.remove('is-hidden');
}

export function uploaded() {
  refs.loaderText.classList.add('is-hidden');
}

export function downloadError() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
  uploaded();
}
