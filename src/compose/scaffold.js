import {promises as fs} from 'node:fs';

import determinePathToTemplateFile from '../template-path.js';

export default async function scaffoldCompose({projectRoot}) {
  await fs.cp(determinePathToTemplateFile('compose.js'), `${projectRoot}/src/compose.js`);
}
