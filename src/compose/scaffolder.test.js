import {promises as fs} from 'node:fs';

import {describe, vi, it, expect} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import determinePathToTemplateFile from '../template-path.js';
import scaffoldCompose from './scaffolder.js';

vi.mock('node:fs');
vi.mock('../template-path.js');

describe('compose scaffolder', () => {
  it('should scaffold the compose module', async () => {
    const projectRoot = any.string();
    const pathToTemplate = any.string();
    when(determinePathToTemplateFile).calledWith('compose.js').thenReturn(pathToTemplate);

    await scaffoldCompose({projectRoot});

    expect(fs.cp).toHaveBeenCalledWith(pathToTemplate, `${projectRoot}/src/compose.js`);
  });
});
