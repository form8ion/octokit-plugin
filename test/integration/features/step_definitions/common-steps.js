import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));
const stubbedTemplates = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'templates'));

let scaffold;

Before(async function () {
  this.projectRoot = process.cwd();

  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold} = await import('@form8ion/octokit-plugin'));

  stubbedFs({
    node_modules: stubbedNodeModules,
    templates: stubbedTemplates
  });
});

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  this.result = await scaffold({projectRoot: this.projectRoot});
});
