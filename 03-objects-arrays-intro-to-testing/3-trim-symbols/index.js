/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let result = '';
  let lastSym = '';
  let counterRepeat = 0;

  if (typeof size === 'undefined') {
    return string;
  }

  for (const el of string) {
    let currentSym = el;

    if (currentSym === lastSym) {
      counterRepeat++;
    } else {
      lastSym = currentSym;
      counterRepeat = 1;
    }

    if (counterRepeat <= size) {
      result += currentSym;
    }
  }

  return result;
}
