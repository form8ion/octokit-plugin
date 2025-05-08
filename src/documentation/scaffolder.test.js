import {promises as fs} from 'node:fs';

import {describe, it, vi, expect} from 'vitest';
import any from '@travi/any';
import {when} from 'vitest-when';

import determinePathToTemplateFile from '../template-path.js';
import scaffoldDocumentation from './scaffolder.js';

vi.mock('node:fs');
vi.mock('../template-path.js');

describe('documentation scaffolder', () => {
  it('should create the example', async () => {
    const projectRoot = any.string();
    const pathToTemplate = any.string();
    when(determinePathToTemplateFile).calledWith('example.js').thenReturn(pathToTemplate);

    await scaffoldDocumentation({projectRoot});

    expect(fs.cp).toHaveBeenCalledWith(pathToTemplate, `${projectRoot}/example.js`);
  });
});
