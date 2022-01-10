import preprocess from 'svelte-preprocess';
import adapter_ipfs from 'sveltejs-adapter-ipfs';
import {execSync} from 'child_process';
import fs from 'fs';

function loadJSON(filepath) {
  try {
    return JSON.parse(fs.readFileSync(filepath).toString());
  } catch (e) {
    return {};
  }
}
const pkg = loadJSON('./package.json');

const VERSION = execSync('git rev-parse --short HEAD').toString().trim();

let outputFolder = './build';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    sourceMap: true,
  }),

  kit: {
    adapter: adapter_ipfs({
      assets: outputFolder,
      pages: outputFolder,
      removeSourceMap: pkg.name === 'jolly' + '-roger-web' ? false : true, // source map are exposed for jolly-roger
      copyBeforeSourceMapRemoval: pkg.name === 'jolly' + '-roger-web' ? undefined : 'release', // source map are exposed for jolly-roger
      removeBuiltInServiceWorkerRegistration: true,
      injectPagesInServiceWorker: true,
      injectDebugConsole: true,
    }),
    target: '#svelte',
    trailingSlash: 'ignore',
    vite: {
      build: {
        sourcemap: true,
      },
      define: {
        __VERSION__: JSON.stringify(VERSION),
      },
    },
  },
};

export default config;
