const MAIN_URL = 'https://api.unsplash.com/photos/';
const SEARCH_URL = `https://api.unsplash.com/search/photos/`;
export default async function getPhotos(searchTerm, pageNumber) {
  const client_id = '?client_id=8Rlo7YjH_VoCQ38I5LfnEBLowz8Cbcv403wXIf8Nthw';
  let API_URL = '';
  if (searchTerm) {
    API_URL = `${SEARCH_URL}${client_id}&query=${searchTerm}&page=${pageNumber}`;
  } else {
    API_URL = `${MAIN_URL}${client_id}&page=${pageNumber}`;
  }
  const data = await fetch(API_URL, { accept: 'application/json' });
  const results = await data.json();
  //   console.log(data);
  if (searchTerm) {
    return results.results;
  }
  return results;
}
