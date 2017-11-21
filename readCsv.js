'use strict';

const readline = require('readline');
const fs = require('fs');

function readCsv(path) {
  return new Promise((resolve, reject) => {
    const arrayCountries = [];
    const lineReader = readline.createInterface({
      input: fs.createReadStream(path)
    });
    lineReader.on('line', line => arrayCountries.push(line.split(',')));

    lineReader.on('close', () => {
      resolve(arrayCountries);
    });

    lineReader.on('error', err => {
      reject(err);
    });
  });
}

module.exports = readCsv;
