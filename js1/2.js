/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   and returns a function.
 * When the returned function is called,
 *   it will return whatever the input function returns
 * When the returned function is called input number of times,
 *   it will return null
 * @param {number} a
 * @param {function} fun
 * @returns {function}
 */

const solution = (a, fun, i = 0) => {
  return () => { 
    if ( i === a ){
      return null
    }
    i = i + 1
    return fun()
  }
}

module.exports = {
  solution
}
