/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  function swap(obj) {
    const result = {};

    if (typeof obj === "undefined") {
      return undefined;
    }

    const objEntries = Object.entries(obj);

    if (objEntries.length === 0) {
      return result;
    }

    for (const [key, value] of objEntries) {
      result[value] = key;
    }
    return result;
  }

  return swap(obj);
}
