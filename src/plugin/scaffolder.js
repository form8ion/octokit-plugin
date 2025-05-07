import {promises as fs} from 'node:fs';

import determinePathToTemplateFile from '../template-path.js';

export default async function scaffoldPlugin({projectRoot}) {
  await fs.cp(determinePathToTemplateFile('plugin.js'), `${projectRoot}/src/plugin.js`);
}
