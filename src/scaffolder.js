import {promises as fs} from 'node:fs';

import {scaffold as scaffoldCompose} from './compose/index.js';
import {scaffold as scaffoldPlugin} from './plugin/index.js';
import {scaffold as scaffoldDocumentation} from './documentation/index.js';

export default async function scaffold({projectRoot}) {
  await Promise.all([
    scaffoldCompose({projectRoot}),
    scaffoldPlugin({projectRoot}),
    scaffoldDocumentation({projectRoot}),
    fs.cp('./templates/index.js', `${projectRoot}/src/index.js`)
  ]);

  return {
    dependencies: {
      javascript: {
        peer: ['@octokit/core'],
        development: ['@octokit/core']
      }
    }
  };
}
