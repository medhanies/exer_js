// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(size) {
    // Ensure width is at least 1 and does not exceed the screen width minus the window's x position
    const maxWidth = this.screenSize.width - this.position.x;
    this.size.width = Math.max(1, Math.min(size.width, maxWidth));

    // Ensure height is at least 1 and does not exceed the screen height minus the window's y position
    const maxHeight = this.screenSize.height - this.position.y;
    this.size.height = Math.max(1, Math.min(size.height, maxHeight));
  }
}
