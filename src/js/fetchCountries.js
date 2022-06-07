const BASE_URL = 'https://restcountries.com/v2';
const FILTER_RESPONSE = 'name,capital,population,flags,languages';
function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?fields=${FILTER_RESPONSE}`).then(
    response => {
      return response.json();
    }
  );
}

export { fetchCountries };
