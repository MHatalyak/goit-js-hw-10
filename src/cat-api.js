const url = 'https://api.thecatapi.com/v1/breeds';
const api_key =
  'live_EAPyDMjbUgKcfFUEpx7puTLp6nL8ysyeHlaXs7Dve77C0mnckEp2aPwOnY3nZbFL';
let storedBreeds = [];

function fetchBreeds() {
  showLoader();

  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => response.json())
    .then(data => {
      data = data.filter(img => img.image?.url != null);
      storedBreeds = data;

      const breedSelector = document.getElementById('breed_selector');
      for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        let option = document.createElement('option');

        if (!breed.image) continue;

        option.value = i;
        option.innerHTML = `${breed.name}`;
        breedSelector.appendChild(option);
      }

      showBreedInfo(0);
    })
    .catch(handleError)
    .finally(hideLoader);
}

function showBreedInfo(index) {
  showLoader();

  const breed = storedBreeds[index];
  document.getElementById('breed_image').src = breed.image.url;
  document.getElementById('breed_name').textContent = breed.name;
  document.getElementById('breed_description').textContent = breed.description;
  document.getElementById('breed_temperament').textContent = breed.temperament;

  hideLoader();
}

function showLoader() {
  const loader = document.querySelector('.loader');
  const catInfo = document.querySelector('.cat-info');

  loader.classList.add('show');
  catInfo.classList.add('hide');
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  const catInfo = document.querySelector('.cat-info');

  loader.classList.remove('show');
  catInfo.classList.remove('hide');
}
function handleError() {
  const errorElement = document.querySelector('.error');
  const hideSpan = document.querySelector('.text');
  hideSpan.classList.add('hide');
  errorElement.classList.remove('hide');
  errorElement.classList.add('show');
}

export { showBreedInfo, fetchBreeds, handleError };
