'use strict';

const readCsv = require('./readCsv');
const rows2Object = require('./rows2Object');
const writeJSON = require('./writeJSON');

main();

async function main() {
  try {
    const arrayCountries = await readCsv('country.csv');
    const objCountries = rows2Object(arrayCountries);
    await writeJSON(objCountries);
    console.log('Done!');
  } catch (err) {
    console.error(err);
  }
}
