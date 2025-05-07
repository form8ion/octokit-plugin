import {scaffold as scaffoldCompose} from './compose/index.js';
import {scaffold as scaffoldPlugin} from './plugin/index.js';

export default async function scaffold({projectRoot}) {
  await Promise.all([
    scaffoldCompose({projectRoot}),
    scaffoldPlugin({projectRoot})
  ]);

  return {};
}
