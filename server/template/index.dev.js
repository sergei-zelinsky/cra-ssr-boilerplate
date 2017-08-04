import serialize from 'serialize-javascript';

export default props => `
  <!doctype html>
  <html ${props.helmet.htmlAttributes.toString()}>
  <head>
    ${props.helmet.title.toString()}
    <meta charset="UTF-8">
    ${props.helmet.meta.toString()}
    ${props.helmet.link.toString()}
    ${props.helmet.base.toString()}
    ${props.helmet.style.toString()}
    ${props.helmet.script.toString()}
  </head>
  <body ${props.helmet.bodyAttributes.toString()}>
    ${props.helmet.noscript.toString()}
    <script type="text/javascript">
      window.INITIAL_STATE = ${serialize(props.initialState)};
      window.ASYNC_COMPONENTS_STATE = ${serialize(props.asyncState)};
    </script>
    <div id="root">${props.appString}</div>
    <script src="/static/js/bundle.js"></script>
  </body>
  </html>
`;
