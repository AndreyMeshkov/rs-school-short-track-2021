/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((val) => `.${val.split('.').reverse().join('.')}`);
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    while (str.includes('.')) {
      obj[str] = obj[str] ? obj[str] + 1 : 1;
      str = str.slice(0, str.lastIndexOf('.'));
    }
  }
  return obj;
}

module.exports = getDNSStats;
