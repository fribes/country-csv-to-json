const fs = require('fs');
const readline = require('readline');

const lineReader = readline.createInterface({
  input: fs.createReadStream('country.csv')
});

const arrayCountries = [];

lineReader.on('line', line => arrayCountries.push(line.split(',')));

lineReader.on('close', toJson);

function toJson() {
  headers = arrayCountries.shift();
  objCountries = arrayCountries.map(perCountry);

  fs.writeFile(
    'country.json',
    JSON.stringify(objCountries, null, 2),
    'utf-8',
    err => {
      if (err) console.error(err);
      else console.log('Done!');
    }
  );

  function perCountry(country) {
    objCountry = headers.reduce((fields, field, index) => {
      fields[field] = country[index];
      return fields;
    }, {});

    return objCountry;
  }
}
