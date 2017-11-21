const fs = require('fs');

fs.readFile('country.csv', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log('Read:' + data);
});
