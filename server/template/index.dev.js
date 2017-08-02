import serialize from 'serialize-javascript';

export default params => `
    <html>
    <head>
        <title>CRA SSR Boilerplate</title>
    </head>
    <body>
        <script type="text/javascript">
            window.INITIAL_STATE = ${serialize(params.initialState)};
            window.ASYNC_COMPONENTS_STATE = ${serialize(params.asyncState)};
        </script>
        <div id="root">${params.appString}</div>
        <script src="/static/js/bundle.js"></script>
    </body>
    </html>
`;
