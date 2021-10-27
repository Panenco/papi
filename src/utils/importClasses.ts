import { glob } from 'glob';
import path from 'path';
import { ClassType } from 'utils/types/classType';

export const importClasses = <TClassType = any>(directories: string[]): [ClassType<TClassType>] => {
  const allFiles = directories.reduce((allDirs, dir) => {
    return allDirs.concat(glob.sync(path.normalize(dir)));
  }, [] as string[]);

  const dirs = allFiles.filter(file => file.endsWith('.js')).map(file => require(path.resolve(file)));

  return loadFileClasses(dirs, []);
};

const loadFileClasses = (exported: any, allLoaded: Function[]) => {
  if (typeof exported === 'function') {
    allLoaded.push(exported);
  } else if (Array.isArray(exported)) {
    exported.forEach((i: any) => loadFileClasses(i, allLoaded));
  } else if (typeof exported === 'object' && exported !== null) {
    Object.keys(exported).forEach(key => loadFileClasses(exported[key], allLoaded));
  }
  return allLoaded as any;
};
