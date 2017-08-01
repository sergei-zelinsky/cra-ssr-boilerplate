import webpack from 'webpack';
import config from '../config/webpack.ssr.config';

process.env.NODE_ENV = 'production';

console.log(`\nBuilding production bundle...\n`);

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

  console.log('\nBuild successful!');
});
