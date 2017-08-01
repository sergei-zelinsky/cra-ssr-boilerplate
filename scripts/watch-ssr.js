'use strict';
// see https://github.com/remy/nodemon/issues/95#issuecomment-143423483
process.stdout.isTTY = true;

process.env['NODE_ENV'] = 'development';

const webpack = require('webpack');
const config = require('../config/webpack.ssr.config');
const chalk = require('chalk');

console.log(
  chalk.magenta('[INFO] ') + chalk.underline('parallel') +
  ' is provided by ' + chalk.underline('moreutils') + ' package.'
);
console.log(chalk.magenta('[INFO] ') +'If you do not have this package you need to install it.');
console.log(
  chalk.magenta('[INFO] ') +
  'Use ' + chalk.underline('sudo apt-get install moreutils') + ' on Linux' +
  ' or ' + chalk.underline('brew install moreutils') + ' on OSX'
);

console.log(
  chalk.magenta('\n[INFO] ') + 'For correct work you have to start' +
  ' your ' + chalk.underline('create-react-app') + ' server with '+
  chalk.underline('npm start') + ' command.'
);

console.log(chalk.cyan('\nWebpack starts to build and watch your files...\n'));

const compiler = webpack(config);

compiler.watch({/* watch options */}, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }
  const statsString = stats.toString({
    colors: true
  });
  console.log(statsString);
  console.log(
    chalk.magenta('[Webpack] ') +
    'Compiled' + chalk.grey(' [timestamp:' + Date.now() + ']'));
});
