'use strict';

function rows2Object(arrayCountries) {
  const keys = arrayCountries.shift();
  const objCountries = arrayCountries.map(perCountry);
  return objCountries

  function perCountry(country) {
    const objCountry = keys.reduce((fields, field, index) => {
      fields[field] = country[index];
      return fields;
    }, {});
    return objCountry;
  }
}

module.exports = rows2Object;