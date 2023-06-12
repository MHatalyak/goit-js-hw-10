const api_key =
  'live_EAPyDMjbUgKcfFUEpx7puTLp6nL8ysyeHlaXs7Dve77C0mnckEp2aPwOnY3nZbFL';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .then(data => {
      return data.map(breed => {
        return { id: breed.id, name: breed.name };
      });
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat by breed');
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        const cat = data[0];
        return {
          image: cat.url,
          breedName: cat.breeds[0].name,
          description: cat.breeds[0].description,
          temperament: cat.breeds[0].temperament,
        };
      } else {
        throw new Error('No cat found for the breed');
      }
    });
}
