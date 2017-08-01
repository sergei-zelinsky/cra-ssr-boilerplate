'use strict';

process.env['NODE_ENV'] = 'production';

const webpack = require('webpack');
const config = require('../config/webpack.ssr.config');
const chalk = require('chalk');

console.log(chalk.cyan('\nCreating production SSR build...\n'));

const compiler = webpack(config);

compiler.run((err, stats) => {
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

  console.log(chalk.green('\nBuild successful!'));
});
