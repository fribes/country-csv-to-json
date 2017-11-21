'use strict';

const fs = require('fs');
const readline = require('readline');

const lineReader = readline.createInterface({
  input: fs.createReadStream('country.csv')
});

const arrayCountries = [];

lineReader.on('line', line => arrayCountries.push(line.split(',')));

lineReader.on('close', (...args) => {
  try {
    const objCountries = toObject(...args);
    write(objCountries);
    console.log('Done!');
  } catch (err) {
    console.error(err);
  }

  function write(data) {
    fs.writeFile(
      'country.json',
      JSON.stringify(data, null, 2),
      'utf-8',
      err => {
        if (err) throw new Error(err);
      }
    );
  }
});

function toObject() {
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
