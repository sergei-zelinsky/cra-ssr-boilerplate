import app from './app.json';
import simpleCounter from './simple-conter.json';
import localeSwitcher from './locale-switcher.json';
import home from './home.json';
import about from './about.json';

export default {
  ...app,
  ...simpleCounter,
  ...localeSwitcher,
  ...home,
  ...about
};
