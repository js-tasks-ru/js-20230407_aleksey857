import {re} from "@babel/core/lib/vendor/import-meta-resolve";

/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 **/
export function sortStrings(arr, param = 'asc') {
  function compareStr(a, b) {
    const directions = {
      asc: 1,
      desc: -1
    };
    const direction = directions[param];

    if (typeof direction === 'undefined') {
      throw new Error(`Unknown param ${param}`);
    }

    return direction * a.localeCompare(b, ["ru", "en"], {caseFirst: "upper"});
  }

  return Array.from(arr).sort(compareStr);
}
