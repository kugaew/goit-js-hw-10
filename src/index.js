import './css/styles.css';
import markupCountry from './js/temlpates/markupCountry.hbs';
import markupCountriesList from './js/temlpates/markupCountriesList.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputEl: document.querySelector('#search-box'),
  countryListEl: document.querySelector('.country-list'),
  countryInfoEl: document.querySelector('.country-info'),
};

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const inputSearchCountry = e.target.value.trim();

  cleanMarkup();

  if (!inputSearchCountry) {
    Notify.info('Empty input field');
    return;
  }

  fetchCountries(inputSearchCountry)
    .then(markup)
    .catch(() => {});
}

function markup(data) {
  if (data.length === 1) {
    refs.countryInfoEl.insertAdjacentHTML('beforeend', markupCountry(data));
  } else if (data.length > 1 && data.length <= 10) {
    refs.countryListEl.insertAdjacentHTML(
      'beforeend',
      markupCountriesList(data)
    );
  } else if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else {
    throw new Error();
  }
}

function notFound() {
  Notify.failure('Oops, there is no country with that name');
}

function cleanMarkup() {
  refs.countryInfoEl.innerHTML = '';
  refs.countryListEl.innerHTML = '';
}
