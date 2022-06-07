export function makeCountryCard(country) {
  const languages = country.languages
    .map(language => {
      return language.name;
    })
    .join(', ');

  return `<h2 class="country__title">
  <img src="${country.flags.svg}" alt="${country.name}" width = 200px class="country__flag"><p>${country.name}</p></h2>
          <p><b>Capital:</b> ${country.capital}</p>
          <p><b>Population:</b> ${country.population}</p>
          <p><b>Languages:</b> ${languages}</p>`;
}

export function makeCountriesList(countries) {
  return countries.map(makeCountryMarkup).join('');
}

function makeCountryMarkup(country) {
  return `<li class="country__item"><img src="${country.flags.svg}" alt="${country.name}" width = 60px class="country__flag"><p class="country__name">${country.name}</p></li>`;
}
