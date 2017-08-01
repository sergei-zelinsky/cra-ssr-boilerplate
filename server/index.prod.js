import 'babel-polyfill';
import express from 'express';
import reactSSRMiddleware from './middlewares/reactSSRMiddleware';
import path from 'path';

const app = express();

const __ROOT_DIR__ = process.cwd();
const staticDirPath = path.resolve(__ROOT_DIR__, 'build', 'static');

app.use('/static', express.static(staticDirPath));

app.get('*', reactSSRMiddleware);

app.listen(4000, error => {
  if (error){
    throw error;
  }
  console.log('[SSR] Running on port 4000. Open http://localhost:4000 in your browser.');
});
