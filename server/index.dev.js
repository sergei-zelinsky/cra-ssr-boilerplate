import 'babel-polyfill';
import express from 'express';
import reactSSRMiddleware from './middlewares/reactSSRMiddleware';
import proxy from 'http-proxy-middleware';

const port = process.env.PORT || 4000;
const app = express();
const webpackDevServerHost = 'localhost:3000';


app.use('/static', proxy({target: `http://${webpackDevServerHost}`, changeOrigin: true}));

app.get('*', reactSSRMiddleware);

app.use(proxy(`ws://${webpackDevServerHost}`, {changeOrigin:true}));

app.listen(4000, error => {
  if (error){
    throw error;
  }
  console.log(`[SSR] Running on port ${port}. Open http://localhost:${port} in your browser.`);
});
