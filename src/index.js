import './css/styles.css';
import debounce from 'lodash.debounce';
import Refs from './js/refs';
import markupCountry from './js/temlpates/markupCountry.hbs';
import markupCountriesList from './js/temlpates/markupCountriesList.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const refs = new Refs();

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const inputSearchCountry = e.target.value.trim();

  cleanMarkup();

  if (!inputSearchCountry) {
    return;
  }

  fetchCountries(inputSearchCountry)
    .then(markup)
    .catch(() => {});
}

function markup(data) {
  if (data.length === 1) {
    refs.countryInfoEl.insertAdjacentHTML(
      'beforeend',
      markupCountry(transformLanguagesObjToStr(data))
    );
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

function cleanMarkup() {
  refs.countryInfoEl.innerHTML = '';
  refs.countryListEl.innerHTML = '';
}

function transformLanguagesObjToStr(couuntryObj) {
  couuntryObj[0].languages = Object.values(couuntryObj[0].languages).join(', ');
  return couuntryObj;
}
