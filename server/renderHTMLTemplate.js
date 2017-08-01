import path from 'path';
import fs from 'fs';

// use script from create-react-app dev-server
const devHTMLTemplate = params => `
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

const prodHTMLTemplate = params => {
  const __ROOT_DIR__ = process.cwd();
  const templatePath = path.resolve(__ROOT_DIR__, 'build', 'index.html');
  const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

  return htmlTemplate
    .replace('{{HTML_MARKUP}}', params.htmlMarkup)
    .replace('{{INITIAL_STATE}}', params.initialState)
    .replace('{{ASYNC_STATE}}', params.asyncState)
};


function resolveHTMLTemplate(){
  return process.env.NODE_ENV === 'production'
    ? prodHTMLTemplate
    : devHTMLTemplate;
}

export default resolveHTMLTemplate();
