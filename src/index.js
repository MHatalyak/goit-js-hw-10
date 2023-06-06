import { showBreedInfo, fetchBreeds, handleError } from './cat-api.js';

document.addEventListener('DOMContentLoaded', function () {
  const breedSelector = document.getElementById('breed_selector');
  const loader = document.querySelector('.loader');
  const catInfo = document.querySelector('.cat-info');
  const errorElement = document.querySelector('.error');

  breedSelector.addEventListener('change', function () {
    const selectedIndex = this.value;
    showBreedInfo(selectedIndex);
  });

  function showLoader() {
    loader.classList.add('show');
    loader.classList.remove('hide');
    catInfo.classList.add('hide');
    errorElement.classList.add('hide');
  }

  function hideLoader() {
    loader.classList.remove('show');
    loader.classList.add('hide');
    catInfo.classList.remove('hide');
  }

  showLoader();

  fetchBreeds().then(hideLoader).catch(handleError);
});
