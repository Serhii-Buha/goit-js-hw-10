import Notiflix from 'notiflix';

const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // проверка ответа в консоли
      return data;
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
};

export default fetchCountries;
