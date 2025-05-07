import compose from './compose.js';

export default function plugin(octokit) {
  return {
    pluginName(options) {
      return compose(octokit, options);
    }
  };
}
