/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathList = path.split('.');
  return function (obj) {
    let tmpObj = obj;
    for (const el of pathList) {
      if (!tmpObj.hasOwnProperty(el)) {
        return undefined;
      }
      tmpObj = tmpObj[el];
    }
    return tmpObj;
  };
}
