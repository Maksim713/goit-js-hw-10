import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const refs = {
  input: document.getElementsByClassName('breed-select'),
  loaderText: document.getElementsByClassName('loader'),
  errorText: document.getElementsByClassName('error'),
  catInfo: document.getElementsByClassName('cat-info'),
  catImg: document.getElementsByClassName('cat-info > img'),
  breedTitle: document.getElementsByClassName('cat-info-title'),
  breedDescription: document.getElementsByClassName('cat-info-description'),
  breedTemtText: document.getElementsByClassName('cat-info-temperament-text'),
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
