import chokidar from 'chokidar';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

const tsConfig = require('../tsconfig.json');

const basePath = path.join(__dirname, '..');
const buildPath = path.join(basePath, tsConfig.compilerOptions.outDir);

const removeBuildFile = (globPattern: string) => {
  let searchPath = path.join(buildPath, globPattern.replace(basePath, ''));
  searchPath = searchPath.endsWith('ts') ? `${searchPath.slice(0, searchPath.length - 3)}.{js,js.map}` : searchPath;
  glob(searchPath, (e, files) => {
    if (e) {
      console.error(e);
      return;
    }

    files
      .map(f => path.join(f))
      .forEach(f => {
        const p = f.replace(basePath, buildPath);
        console.log(`Removing ${p}`);
        fs.unlink(p, e => e && console.error(e));
      });
  });
};

const watcher = chokidar.watch(basePath);
watcher.on('unlink', removeBuildFile);
console.log('Watching for removed files');
