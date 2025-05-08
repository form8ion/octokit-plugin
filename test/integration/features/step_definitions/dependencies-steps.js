import assert from 'node:assert';
import {Then} from '@cucumber/cucumber';

Then('octokit-core is captured as a peer dependency', async function () {
  const javascriptDependencies = this.result.dependencies.javascript;
  const {development: devDependencies, peer: peerDependencies} = javascriptDependencies;

  assert.equal(peerDependencies.includes('@octokit/core'), true);
  assert.equal(devDependencies.includes('@octokit/core'), true);
});
