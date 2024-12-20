// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  function moveRight(x, y) {
    const newx = x + dx;
    const newy = y + dy;
    return [newx, newy];
  }
  return moveRight;
  throw new Error("Implement the translate2d function");
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  function scaleUp(x, y) {
    const newx = x * sx;
    const newy = y * sy;
    return [newx, newy];
  }
  return scaleUp;
  throw new Error("Implement the scale2d function");
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  function composed(x, y) {
    const newx = f(x, y);
    const newy = g(newx[0], newx[1]);
    return [newy[0], newy[1]];
  }
  return composed;

  throw new Error("Implement the composeTransform function");
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let lastX = null;
  let lastY = null;
  let lastResult = null;
  function remembered(x, y) {
    if (lastX === x && lastY === y) {
      return lastResult; // Return cached result
    }
    lastX = x;
    lastY = y;
    lastResult = f(x, y);
    return lastResult;
  }

  return remembered;

  throw new Error("Implement the memoizeTransform function");
}
