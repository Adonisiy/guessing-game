class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    if (this.direction == 'lower') this.max = this.probe;
    if (this.direction == 'greater') this.min = this.probe;
    this.probe = Math.ceil((this.min + this.max) / 2);
    return this.probe;
  }

  lower() {
    this.direction = 'lower';
  }

  greater() {
    this.direction = 'greater';
  }
}

module.exports = GuessingGame;
