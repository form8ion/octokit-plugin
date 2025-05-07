import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the plugin is exposed through the public interface', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/src/plugin.js`), true);
});
