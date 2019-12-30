/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   runs the input function input number of times
 * @param {number} a
 * @param {function} fun
 * @returns null
 */

const solution = (a, fun, i = 0) => {
  if( i === a){
    return null
  }
  fun()
  return solution(a, fun, i + 1)
}

module.exports = {
  solution
}
