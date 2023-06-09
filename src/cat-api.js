const url = 'https://api.thecatapi.com/v1/breeds';
const api_key =
  'live_EAPyDMjbUgKcfFUEpx7puTLp6nL8ysyeHlaXs7Dve77C0mnckEp2aPwOnY3nZbFL';

function fetchBreeds() {
  return fetch(url, {
    headers: {
      'x-api-key': api_key,
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

export { fetchBreeds };
