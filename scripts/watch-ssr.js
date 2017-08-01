'use strict';

process.env['NODE_ENV'] = 'development';

const webpack = require('webpack');
const config = require('../config/webpack.ssr.config');

console.log('[INFO] \'parallel\' is provided by \'moreutils\')} package.');
console.log('[INFO] If you do not have this package you need to install it.');
console.log(
  '[INFO] Use \'sudo apt-get install moreutils\' on Linux' +
  ' or \'brew install moreutils\' on OSX.'
);

console.log(
  '\n[INFO] For correct work you have to start' +
  ' your \'create-react-app\' server with \'npm start\' command.'
);

console.log('\nWebpack starts to build and watch your files...\n');

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
});
