// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
      break;
    case "Energizer":
      return 1.5;
      break;
    case "Green Garden":
      return 1.5;
      break;
    case "Tropical Island":
      return 3;
      break;
    case "All or Nothing":
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
  throw new Error("Please implement the timeToMixJuice function");
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalLimes = 0;
  let i = 0;
  let totalWedges = 0;
  while (i < limes.length && totalWedges < wedgesNeeded) {
    if (limes[i] === "small") {
      totalWedges += 6;
    } else if (limes[i] === "medium") {
      totalWedges += 8;
    } else if (limes[i] === "large") {
      totalWedges += 10;
    }
    totalLimes += 1;
    i++;
  }

  return totalLimes;

  throw new Error("Please implement the limesToCut function");
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft >= 0) {
    let orderTime = 0;

    if (orders[0] === "Energizer") {
      orderTime = 1.5;
    } else if (orders[0] === "All or Nothing") {
      orderTime = 5;
    } else if (orders[0] === "Green Garden") {
      orderTime = 1.5;
    } else if (orders[0] === "Tropical Island") {
      orderTime = 3;
    } else if (orders[0] === "Pure Strawberry Joy") {
      orderTime = 0.5;
    } else {
      orderTime = 2.5;
    }
    if (timeLeft >= 0) {
      timeLeft -= orderTime;
      orders.shift(); // Remove the completed order
    } else {
      break; // Exit if there's not enough time for the next order
    }
  }
  return orders;
  throw new Error("Please implement the remainingOrders function");
}
