import 'babel-polyfill';
import express from 'express';
import reactSSRMiddleware from './middlewares/reactSSRMiddleware';
import path from 'path';

const port = process.env.PORT || 4000;

const app = express();

const __ROOT_DIR__ = process.cwd();
const staticDirPath = path.resolve(__ROOT_DIR__, 'build', 'static');

app.use('/static', express.static(staticDirPath));

app.get('*', reactSSRMiddleware);

app.listen(port, error => {
  if (error){
    throw error;
  }
  console.log(`[SSR] Running on port ${port}. Open http://localhost:${port} in your browser.`);
});
