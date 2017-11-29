const { Observable } = require('rx');

const readDir = require('./readDir');
const info = require('./infoLog');

module.exports = function loopPages(handler, dir = 'src/pages') {
  return Observable.from(readDir(dir))
    .flatMap(articleParentDir => {
      const path = `${dir}/${articleParentDir}`;
      info(`reading path/file ${path}`, 'greenBright');
      handler(path, articleParentDir);

      if (readDir(path)) {
        info(`${path} is a directory so looping again`, 'greenBright');
        return loopPages(handler, path);
      }

      return Observable.of(null);
  });
};
