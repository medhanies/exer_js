// @ts-check

import { error } from "console";

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error("temp too high");
  }

  // throw new Error("Implement the checkHumidity function");
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  class ArgumentError extends Error {
    constructor() {
      super();
      temperature === null;
    }
  }
  class OverheatingError extends Error {}

  try {
    if (temperature === null) {
      ArgumentError;
    } else if (temperature > 500) {
      OverheatingError;
    }
  } catch (error) {
    if (error instanceof ArgumentError) {
      throw new ArgumentError();
    }
    if (error instanceof OverheatingError) {
      throw new OverheatingError("too high temp");
    }
  }
  // throw new Error("Implement the reportOverheating function");
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  throw new Error("Implement the monitorTheMachine function");
}
