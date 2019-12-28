/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, i = 2) => {
  if(a === 1){
    return false
  }
  if(i > (a / 2)){
    return true
  }
  if(a % i === 0){
    return false
  }
  return solution(a,i + 1)
}

module.exports = {
  solution
}
