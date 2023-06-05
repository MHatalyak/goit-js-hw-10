const url = 'https://api.thecatapi.com/v1/breeds';
const api_key =
  'live_EAPyDMjbUgKcfFUEpx7puTLp6nL8ysyeHlaXs7Dve77C0mnckEp2aPwOnY3nZbFL';
let storedBreeds = [];

fetch(url, {
  headers: {
    'x-api-key': api_key,
  },
})
  .then(response => {
    return response.json();
  })
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
  .catch(function (error) {
    console.log(error);
  });

function showBreedInfo(index) {
  const breed = storedBreeds[index];
  document.getElementById('breed_image').src = breed.image.url;
  document.getElementById('breed_name').textContent = breed.name;
  document.getElementById('breed_description').textContent = breed.description;
  document.getElementById('breed_temperament').textContent = breed.temperament;
}

export { showBreedInfo };
