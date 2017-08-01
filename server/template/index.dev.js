export default params => `
    <html>
    <head>
        <title>CRA SSR Boilerplate</title>
    </head>
    <body>
        <div id="root">${params.htmlMarkup}</div>
        <script type="application/json" id="initial-state">${params.initialState}</script>
        <script type="application/json" id="async-state">${params.asyncState}</script>
        <script src="/static/js/bundle.js"></script>
    </body>
    </html>
`;
