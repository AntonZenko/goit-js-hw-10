import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { makeCountryCard, makeCountriesList } from './js/markup';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('#search-box');
const listRef = document.querySelector('.country-list');
const cardRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onHandleInput, DEBOUNCE_DELAY));

function onHandleInput(e) {
  e.preventDefault();
  removeCountriesMarkup();
  const countyName = e.target.value.trim();
  fetchCountries(countyName)
    .then(country => {
      if (country.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.',
          {
            timeout: 1500,
          }
        );
      }
      if (country.length === 1) {
        cardRef.innerHTML = makeCountryCard(country[0]);
        Notify.success('Search completed', {
          timeout: 1500,
        });
        listRef.innerHTML = '';
        return;
      }
      listRef.innerHTML = makeCountriesList(country);
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));
}

function removeCountriesMarkup() {
  listRef.innerHTML = '';
  cardRef.innerHTML = '';
}
