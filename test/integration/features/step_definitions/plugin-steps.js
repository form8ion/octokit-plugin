import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';
import {promises as fs} from 'fs';

Then('the plugin is exposed through the public interface', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/src/plugin.js`), true);
  assert.equal(
    (await fs.readFile(`${this.projectRoot}/src/index.js`, 'utf-8'))
      .includes("export {default as plugin} from './plugin.js';"),
    true
  );
});
