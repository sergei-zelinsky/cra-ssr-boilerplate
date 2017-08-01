import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';

const __ROOT_DIR__ = process.cwd();

const templatePath = path.resolve(__ROOT_DIR__, 'build', 'index.html');

const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

// TODO: use own HTML-template instead template from build/index.html
export default params => htmlTemplate
  .replace('{{APP_STRING}}', params.appString)
  .replace(`"{{INITIAL_STATE}}"`, serialize(params.initialState))
  .replace(`"{{ASYNC_COMPONENTS_STATE}}"`, serialize(params.asyncState));
