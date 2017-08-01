import path from 'path';
import fs from 'fs';

const __ROOT_DIR__ = process.cwd();

const templatePath = path.resolve(__ROOT_DIR__, 'build', 'index.html');

const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

export default params => htmlTemplate
  .replace('{{APP_STRING}}', params.htmlMarkup)
  .replace(`'{{INITIAL_STATE}}'`, params.initialState)
  .replace(`'{{ASYNC_COMPONENTS_STATE}}'`, params.asyncState);
