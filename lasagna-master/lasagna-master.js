/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  }
  if (remainingTime > 0) {
    return "Not done, please wait.";
  }
  return "You forgot to set the timer.";
}

export function preparationTime(layers, time) {
  if (time) {
    return layers.length * time;
  }
  return layers.length * 2;
}

export function quantities(layers) {
  const obj = { noodles: 0, sauce: 0 };
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      obj["noodles"] += 50;
    }
    if (layers[i] === "sauce") {
      obj["sauce"] += 0.2;
    }
  }
  return obj;
}
