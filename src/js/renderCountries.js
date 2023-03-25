import Notiflix from 'notiflix';

const renderCountries = responses => {
  const countryList = document.querySelector('.country-list');
  const countryCard = document.querySelector('.country-info');

  if (responses.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (responses.length > 1 && responses.length <= 10) {
    const countries = responses
      .map(response => {
        const { flags, name } = response;
        return `
        <li>
          <img src="${flags.svg}" alt="${flags.alt}" width="48" height="48"/>
          <p><b>${name.official}</b></p>
        </li>
      `;
      })
      .join('');

    countryList.innerHTML = countries;
  } else if (responses.length === 1) {
    const { flags, name, capital, population, languages } = responses[0];
    const languagesList = Object.values(languages).join(', ');

    const country = `
      <h2><img src="${flags.svg}" alt="${flags.alt}" width="50" height="auto"/> ${name.official}</h2>
      <p><b>Capital</b>: ${capital}</p>
      <p><b>Population</b>: ${population}</p>
      <p><b>Languages</b>: ${languagesList}</p>
    `;

    countryCard.innerHTML = country;
  }
};

export default renderCountries;

//v2

// import Notiflix from 'notiflix';

// const renderCountries = responses => {
//   const countryList = document.querySelector('.country-list');
//   const countryCard = document.querySelector('.country-info');

//   if (responses.length > 10) {
//     Notiflix.Notify.info(
//       'Too many matches found. Please enter a more specific name.'
//     );
//     return;
//   }

//   for (let response of responses) {
//     const { flags, name, capital, population, languages } = response;
//     if (responses.length > 1 && responses.length <= 10) {
//       countryList.innerHTML += `<li>
//         <img src="${flags.svg}" alt="${flags.alt}" width="48" height="48"/>
//         <p><b>${name.official}</b></p>
//         </li>`;
//     } else if (responses.length === 1) {
//       const languagesList = Object.values(languages).join(', ');
//       countryCard.innerHTML = `
//         <h2><img src="${flags.svg}" alt="${flags.alt}" width="50" height="auto"/>
//         ${name.official}</h2>
//         <p><b>Capital</b>: ${capital}</p>
//         <p><b>Population</b>: ${population}</p>
//         <p><b>Languages</b>: ${languagesList}</p>
//       `;
//     }
//   }
// };

// export default renderCountries;
