/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      positions.push(i);
    }
  }
  const newArr = arr.filter((val) => val !== -1);
  newArr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (positions.includes(i)) {
      result.push(-1);
    } else {
      result.push(newArr[j]);
      j++;
    }
  }
  return result;
}

module.exports = sortByHeight;
