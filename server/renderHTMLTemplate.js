import path from 'path';
import fs from 'fs';

const __ROOT_DIR__ = process.cwd();

const htmlTemplateFilePath = path.resolve(__ROOT_DIR__, 'build', 'index.html');

const htmlTemplate = fs.readFileSync(htmlTemplateFilePath, 'utf-8');

function renderHTMLTemplate(params){
  return htmlTemplate
    .replace('{{HTML_MARKUP}}', params.htmlMarkup)
    .replace('{{INITIAL_STATE}}', params.initialState)
}

export default renderHTMLTemplate;
