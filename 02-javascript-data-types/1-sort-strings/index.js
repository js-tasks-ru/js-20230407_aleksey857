import {re} from "@babel/core/lib/vendor/import-meta-resolve";

/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 **/
export function sortStrings(arr, param = 'asc') {
  function compareStr(a, b) {
    return a.localeCompare(b, ["ru", "en"], {caseFirst: "upper"});
  }

  if (param === 'desc') {
    return Array.from(arr).sort(compareStr).reverse();
  } else {
    return Array.from(arr).sort(compareStr);
  }
}
