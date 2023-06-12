import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', function () {
  const breedSelector = document.getElementById('breed_selector');
  const loader = document.querySelector('.loader');
  const catInfo = document.querySelector('.cat-info');
  const errorElement = document.querySelector('.error');
  const hideSpan = document.querySelector('.text');
  let storedBreeds = [];

  breedSelector.addEventListener('change', function () {
    const selectedIndex = this.value;
    showBreedInfo(selectedIndex);
  });

  function showBreedInfo(index) {
    showLoader();

    const breed = storedBreeds[index];
    fetchCatByBreed(breed.id)
      .then(cat => {
        document.getElementById('breed_image').src = cat.image;
        document.getElementById('breed_name').textContent = cat.breedName;
        document.getElementById('breed_description').textContent =
          cat.description;
        document.getElementById('breed_temperament').textContent =
          cat.temperament;
      })
      .catch(handleError)
      .finally(hideLoader);

    hideSpan.classList.remove('hide');
  }

  function showLoader() {
    breedSelector.classList.add('hide');
    loader.classList.add('show');
    loader.classList.remove('hide');
    catInfo.classList.add('hide');
    errorElement.classList.add('hide');
  }

  function hideLoader() {
    loader.classList.remove('show');
    loader.classList.add('hide');
    catInfo.classList.remove('hide');
    breedSelector.classList.remove('hide');
  }

  function handleError(error) {
    hideSpan.classList.add('hide');
    errorElement.textContent = error.message;
    errorElement.classList.remove('hide');
    errorElement.classList.add('show');
  }

  showLoader();

  fetchBreeds()
    .then(data => {
      storedBreeds = data;

      for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        let option = document.createElement('option');

        option.value = i;
        option.innerHTML = `${breed.name}`;
        breedSelector.appendChild(option);
      }

      hideSpan.classList.add('hide');
    })
    .catch(handleError)
    .finally(hideLoader);
});
