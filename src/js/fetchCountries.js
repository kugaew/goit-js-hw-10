//https://restcountries.com/v2/name/ukra/?fields=name,capital,population,flags,languages

const BASE_URL = 'https://restcountries.com/v2/';
const END_POINT = 'name';
const FILTER_FIELDS = ['name', 'capital', 'population', 'flags', 'languages'];

export function fetchCountries(name) {
  return fetch(
    `${BASE_URL}${END_POINT}/${name}/?fields=${FILTER_FIELDS.join(',')}`
  )
    .then(responce => {
      if (!responce.ok) {
        throw new Error('Oops, there is no country with that name');
      }
      return responce.json();
    })
    .catch(err => console.log(err));
}
