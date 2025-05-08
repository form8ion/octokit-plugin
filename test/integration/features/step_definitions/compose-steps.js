import {promises as fs} from 'node:fs';
import {fileExists} from '@form8ion/core';

import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the compose functionality is exposed through the public interface', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/src/compose.js`), true);
  assert.equal(
    (await fs.readFile(`${this.projectRoot}/src/index.js`, 'utf-8'))
      .includes("export {default as compose} from './compose.js';"),
    true
  );
});
