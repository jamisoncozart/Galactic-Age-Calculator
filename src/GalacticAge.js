export class GalacticAge {
  constructor(age) {
    this.earthAge = age;
    this.earthYearsLeft = 150 - this.earthAge;
    this.mercuryAge = Math.floor(age / 0.24);
    this.venusAge = Math.floor(age / 0.62);
    this.marsAge = Math.floor(age / 1.88);
    this.jupiterAge = Math.floor(age / 11.86);
  }
  calculateYearsLeft() {
    this.mercuryYearsLeft = Math.floor(this.earthYearsLeft / 0.24);
    this.venusYearsLeft = Math.floor(this.earthYearsLeft / 0.62);
    this.marsYearsLeft = Math.floor(this.earthYearsLeft / 1.88);
    this.jupiterYearsLeft = Math.floor(this.earthYearsLeft / 11.86);
  }
  calculateLifeChoices(favoriteThing, favoriteGenre) {
    if(favoriteThing === 'space') {
      this.earthYearsLeft = Math.floor(this.earthYearsLeft * 1.2);
    }
    if(favoriteGenre === 'sciFi') {
      this.earthYearsLeft = Math.floor(this.earthYearsLeft * 1.2);
    }
  }
}