const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async function () {
  console.log(`${chalk.dim.grey(DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS))} ${chalk.bold.grey('LOG')}: Request to function hello-world received`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
