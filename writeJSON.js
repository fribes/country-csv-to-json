'use strict';
const fs = require('fs');

function writeJSON(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      'country.json',
      JSON.stringify(data, null, 2),
      'utf-8',
      err => {
        if (err) reject(err);
        else resolve();
      }
    );
  });
}

module.exports = writeJSON;
