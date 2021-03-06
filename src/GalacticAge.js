export class GalacticAge {
  constructor(age) {
    this.earthAge = age;
    this.earthYearsLeft = 150 - this.earthAge;
    this.mercuryAge = Math.floor(age / 0.24);
    this.venusAge = Math.floor(age / 0.62);
    this.marsAge = Math.floor(age / 1.88);
    this.jupiterAge = Math.floor(age / 11.86);
  }
  calculateCheatDeath() {
    if(this.earthAge >= 150) {
      this.earthYearsCheatedDeath = this.earthAge - 150;
      this.mercuryYearsCheatedDeath = Math.floor(this.earthYearsCheatedDeath / 0.24);
      this.venusYearsCheatedDeath = Math.floor(this.earthYearsCheatedDeath / 0.62);
      this.marsYearsCheatedDeath = Math.floor(this.earthYearsCheatedDeath / 1.88);
      this.jupiterYearsCheatedDeath = Math.floor(this.earthYearsCheatedDeath / 11.86);
    }
  }
  calculateLifeChoices(favoriteThing, favoriteGenre, isAlien) {
    if(favoriteThing === 'Space') {
      this.earthYearsLeft = Math.floor(this.earthYearsLeft * 1.2);
    }
    if(favoriteGenre === 'SciFi') {
      this.earthYearsLeft = Math.floor(this.earthYearsLeft * 1.2);
    }
    if(isAlien === 'alien') {
      this.earthYearsLeft += 100;
    }
  }
  calculateYearsLeft() {
    if(this.earthYearsLeft > 0) {
      this.mercuryYearsLeft = Math.floor(this.earthYearsLeft / 0.24);
      this.venusYearsLeft = Math.floor(this.earthYearsLeft / 0.62);
      this.marsYearsLeft = Math.floor(this.earthYearsLeft / 1.88);
      this.jupiterYearsLeft = Math.floor(this.earthYearsLeft / 11.86);
    } else {
      this.earthYearsLeft = 0;
      this.mercuryYearsLeft = 0;
      this.venusYearsLeft = 0;
      this.marsYearsLeft = 0;
      this.jupiterYearsLeft = 0;
    }
  }
}