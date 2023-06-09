import { fetchBreeds } from './cat-api.js';

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
    document.getElementById('breed_image').src = breed.image.url;
    document.getElementById('breed_name').textContent = breed.name;
    document.getElementById('breed_description').textContent =
      breed.description;
    document.getElementById('breed_temperament').textContent =
      breed.temperament;

    hideLoader();
    hideSpan.classList.remove('hide');
  }

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
  function handleError() {
    hideSpan.classList.add('hide');

    errorElement.classList.remove('hide');
    errorElement.classList.add('show');
  }

  showLoader();

  fetchBreeds()
    .then(data => {
      console.log(data);
      storedBreeds = data;

      for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        let option = document.createElement('option');

        if (!breed.image) continue;

        option.value = i;
        option.innerHTML = `${breed.name}`;
        breedSelector.appendChild(option);
      }

      //   showBreedInfo(0);
      hideSpan.classList.add('hide');
    })
    .catch(handleError)
    .finally(hideLoader);
});
