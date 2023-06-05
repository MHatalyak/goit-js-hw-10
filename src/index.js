import { showBreedInfo } from './cat-api.js';

const breedSelector = document.getElementById('breed_selector');
breedSelector.addEventListener('change', function () {
  const selectedIndex = this.value;
  showBreedInfo(selectedIndex);
});
