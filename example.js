// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {scaffold} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs({templates: stubbedFs.load('templates')});

// #### Execute

await scaffold({projectRoot: process.cwd()});
