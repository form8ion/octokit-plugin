// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {Octokit} from '@octokit/core';
import {plugin, compose} from './lib/index.js';

// remark-usage-ignore-next
stubbedFs();

// #### As a plugin

const MyOctokit = Octokit.plugin(plugin);
const octokitWithPlugin = new MyOctokit({auth: 'secret123'});

octokitWithPlugin.pluginName({});

// #### Direct usage (not as a plugin)

const octokit = new Octokit({auth: 'secret123'});

await compose(octokit, {});
