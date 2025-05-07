import {resolve} from 'path';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle

export default function determinePathToTemplateFile(fileName) {
  return resolve(__dirname, '..', 'templates', fileName);
}
