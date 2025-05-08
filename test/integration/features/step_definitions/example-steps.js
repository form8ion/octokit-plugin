import {fileExists} from '@form8ion/core';

import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('the example demonstrates use as a plugin and through compose', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/example.js`), true);
});
