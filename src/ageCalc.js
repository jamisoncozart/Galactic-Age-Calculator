export class GalacticAge {
  constructor(age) {
    this.earthAge = age;
    this.mercuryAge = Math.floor(age / 0.24);
    this.venusAge = Math.floor(age / 0.62);
    this.marsAge = Math.floor(age / 1.88);
  }
}