// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export function getCardPosition(stack, card) {
  const place = stack.indexOf(card);
  return place;
  throw new Error("Implement the getCardPosition function");
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export function doesStackIncludeCard(stack, card) {
  const present = stack.includes(card);
  return present;
  throw new Error("Implement the doesStackIncludeCard function");
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export function isEachCardEven(stack) {
  const isEven = stack.every((n) => n % 2 == 0);
  return isEven;
  throw new Error("Implement the isEachCardEven function");
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export function doesStackIncludeOddCard(stack) {
  const isOdd = stack.some((n) => n % 2 !== 0);
  return isOdd;
  throw new Error("Implement the doesStackIncludesOddCard function");
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number | undefined} the first odd value
 */
export function getFirstOddCard(stack) {
  const getOdd = stack.find((n) => n % 2 !== 0);
  return getOdd;
  throw new Error("Implement the getFirstOddCard function");
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  const firstEven = stack.findIndex((n) => n % 2 === 0);
  return firstEven;
  throw new Error("Implement the getFirstEvenCardPosition function");
}
