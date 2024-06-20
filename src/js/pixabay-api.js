export function searchImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44428976-d6e941eddcd51cc03234da6bf',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  console.log(url);
  return fetch(url)
    .then(data => data.json())
    .catch(err => {});
}



//Ваш ключ API:44428976-d6e941eddcd51cc03234da6bf!===============================================================

