import serialize from 'serialize-javascript';
import assetManifest from '../../build/asset-manifest.json';

export default props => `
  <!doctype html>
  <html ${props.helmet.htmlAttributes.toString()}>
  <head>
    <meta charset="utf-8">
    ${props.helmet.title.toString()}
    ${props.helmet.base.toString()}
    <meta name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no">
    ${props.helmet.meta.toString()}
    <meta name="theme-color" content="#000000">
    ${props.helmet.link.toString()}
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <link href="${assetManifest['main.css']}" rel="stylesheet">
    ${props.helmet.style.toString()}
    ${props.helmet.script.toString()}
  </head>
  <body ${props.helmet.bodyAttributes.toString()}>
  ${props.helmet.noscript.toString()}
  <script type="text/javascript">
    window.INITIAL_STATE = ${serialize(props.initialState)};
    window.ASYNC_COMPONENTS_STATE = ${serialize(props.asyncState)}
  </script>
  <div id="root">${props.appString}</div>
  <script type="text/javascript" src="${assetManifest['main.js']}"></script>
  </body>
  </html>
`;
