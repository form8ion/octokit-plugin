import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';

import {scaffold as scaffoldPlugin} from './plugin/index.js';
import {scaffold as scaffoldCompose} from './compose/index.js';
import scaffold from './scaffolder.js';

vi.mock('./plugin/index.js');
vi.mock('./compose/index.js');

describe('scaffolder', () => {
  it('should define the plugin and the compose capability', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot})).toEqual({});

    expect(scaffoldCompose).toHaveBeenCalledWith({projectRoot});
    expect(scaffoldPlugin).toHaveBeenCalledWith({projectRoot});
  });
});
