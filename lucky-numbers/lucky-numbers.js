// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const x = Number(array1.join("")) + Number(array2.join(""));
  return x;
  throw new Error("Implement the twoSum function");
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueString = value.toString();
  const removeCommas = valueString.split("");

  let i = 0;
  const newArr = [];
  for (i = removeCommas.length - 1; i >= 0; i--) {
    newArr.push(removeCommas[i]);
  }
  const num = Number(newArr.join(""));
  if (value === num) {
    return true;
  }
  return false;
  throw new Error("Implement the luckyNumber function");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  throw new Error("Implement the errorMessage function");
}
