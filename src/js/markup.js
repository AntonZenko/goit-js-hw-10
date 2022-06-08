export function makeCountryCard({
  name,
  capital,
  population,
  languages,
  flags,
}) {
  const lang = languages
    .map(language => {
      return language.name;
    })
    .join(', ');

  return `<h2 class="country__title">
  <img src="${flags.svg}" alt="${name}" width = 200px class="country__flag"><p>${name}</p></h2>
          <p><b>Capital:</b> ${capital}</p>
          <p><b>Population:</b> ${population}</p>
          <p><b>Languages:</b> ${lang}</p>`;
}

export function makeCountriesList(countries) {
  return countries.map(makeCountryMarkup).join('');
}

function makeCountryMarkup(country) {
  return `<li class="country__item"><img src="${country.flags.svg}" alt="${country.name}" width = 60px class="country__flag"><p class="country__name">${country.name}</p></li>`;
}
