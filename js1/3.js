/**
 * Write a function called solution that
 *   takes in 2 parameters, a number n and string,
 *   and returns the string repeated n number of times
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, result = '', i = 0) => {
  if( i === a ){
    return result
  }
  result = b + result
  return solution(a, b, result, i + 1)
}

module.exports = {
  solution
}
