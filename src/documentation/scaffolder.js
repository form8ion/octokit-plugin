import {promises as fs} from 'node:fs';

import determinePathToTemplateFile from '../template-path.js';

export default async function scaffoldDocumentation({projectRoot}) {
  await fs.cp(determinePathToTemplateFile('example.js'), `${projectRoot}/example.js`);
}
