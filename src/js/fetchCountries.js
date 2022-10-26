//https://restcountries.com/v2/name/ukra/?fields=name,capital,population,flags,languages
/* export { notFound } from '../index'; */
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://restcountries.com/v3.1/';
const END_POINT = 'name';
const FILTER_FIELDS = ['name', 'capital', 'population', 'flags', 'languages'];

export function fetchCountries(name) {
  return fetch(
    `${BASE_URL}${END_POINT}/${name}/?fields=${FILTER_FIELDS.join(',')}`
  )
    .then(responce => {
      if (!responce.ok || responce.status === 404) {
        throw new Error();
      }
      return responce.json();
    })
    .catch(() => Notify.failure('Oops, there is no country with that name'));
}
