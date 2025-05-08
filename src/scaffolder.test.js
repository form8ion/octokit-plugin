import {promises as fs} from 'node:fs';

import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';

import {scaffold as scaffoldPlugin} from './plugin/index.js';
import {scaffold as scaffoldCompose} from './compose/index.js';
import {scaffold as scaffoldDocumentation} from './documentation/index.js';
import scaffold from './scaffolder.js';

vi.mock('node:fs');
vi.mock('./plugin/index.js');
vi.mock('./compose/index.js');
vi.mock('./documentation/index.js');

describe('scaffolder', () => {
  it('should define the plugin and the compose capability', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot}))
      .toEqual({dependencies: {javascript: {peer: ['@octokit/core'], development: ['@octokit/core']}}});

    expect(scaffoldCompose).toHaveBeenCalledWith({projectRoot});
    expect(scaffoldPlugin).toHaveBeenCalledWith({projectRoot});
    expect(scaffoldDocumentation).toHaveBeenCalledWith({projectRoot});
    expect(fs.cp).toHaveBeenCalledWith('./templates/index.js', `${projectRoot}/src/index.js`);
  });
});
