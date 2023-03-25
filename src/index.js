import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import renderCountries from './js/renderCountries';

const DEBOUNCE_DELAY = 300;

const searchInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryCard = document.querySelector('.country-info');

const options = e => {
  const searchValue = e.target.value.trim();
  if (!searchValue) {
    clearResults();
    return;
  }

  clearResults();

  fetchCountries(searchValue)
    .then(response => renderCountries(response))
    .catch(error => console.log(error));
};

searchInput.addEventListener('input', debounce(options, DEBOUNCE_DELAY));

const clearResults = () => {
  countryList.innerHTML = '';
  countryCard.innerHTML = '';
};
