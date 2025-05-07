import {promises as fs} from 'node:fs';

import {describe, vi, it, expect} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import determinePathToTemplateFile from '../template-path.js';
import scaffoldPlugin from './scaffolder.js';

vi.mock('node:fs');
vi.mock('../template-path.js');

describe('plugin scaffolder', () => {
  it('should scaffold the plugin module', async () => {
    const projectRoot = any.string();
    const pathToTemplate = any.string();
    when(determinePathToTemplateFile).calledWith('plugin.js').thenReturn(pathToTemplate);

    await scaffoldPlugin({projectRoot});

    expect(fs.cp).toHaveBeenCalledWith(pathToTemplate, `${projectRoot}/src/plugin.js`);
  });
});
