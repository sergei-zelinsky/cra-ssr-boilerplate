import 'babel-polyfill';
import express from 'express';
import reactSSRMiddleware from './middlewares/reactSSRMiddleware';
import proxy from 'http-proxy-middleware';

const app = express();
const webpackDevServerHost = 'localhost:3000';


app.use('/static', proxy({target: `http://${webpackDevServerHost}`, changeOrigin: true}));

app.get('*', reactSSRMiddleware);



app.use(proxy(`ws://${webpackDevServerHost}`, {changeOrigin:true}));

app.listen(4000, error => {
  if (error){
    throw error;
  }
  console.log('[SSR] Running on port 4000. Open http://localhost:4000 in your browser.');
});
