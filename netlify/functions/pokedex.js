const chalk = require('chalk');
const { DateTime } = require('luxon');
// mod.cjs
// eslint-disable-next-line no-shadow, import/no-extraneous-dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async (event) => {
  const datePrefix = chalk.dim.grey(DateTime.now()
    .toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS));
  const logPrefix = `${datePrefix + chalk.bold.grey(' (LOG)')}: `;
  const eventBody = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  console.log(logPrefix + chalk.white('Pokedex function called - ') + chalk.green(`Region requested: ${JSON.stringify(eventBody)}`));

  const response = await fetch(POKE_API);
  const data = await response.json();



  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
