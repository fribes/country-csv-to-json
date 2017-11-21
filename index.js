const fs = require('fs');
const readline = require('readline');

const lineReader = readline.createInterface({
  input: fs.createReadStream('country.csv')
});

const countries = [];

lineReader.on('line', line => countries.push(line.split(',')));

lineReader.on('close', () => {
  fs.writeFile(
    'country.json',
    JSON.stringify(countries, null, 2),
    'utf-8',
    err => {
      if (err) console.error(err);
      else console.log('Done!');
    }
  );
});
