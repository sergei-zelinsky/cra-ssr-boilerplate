import serialize from 'serialize-javascript';
import assetManifest from '../../build/asset-manifest.json';

export default params => `
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <meta name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no">
      <meta name="theme-color" content="#000000">
      <link rel="manifest" href="/manifest.json">
      <link rel="shortcut icon" href="/favicon.ico">
      <link href="${assetManifest['main.css']}" rel="stylesheet">
  </head>
  <body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <script type="text/javascript">
    window.INITIAL_STATE = ${serialize(params.initialState)};
    window.ASYNC_COMPONENTS_STATE = ${serialize(params.asyncState)}
  </script>
  <div id="root">${params.appString}</div>
  <script type="text/javascript" src="${assetManifest['main.js']}"></script>
  </body>
  </html>
`;
