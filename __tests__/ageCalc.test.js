import { GalacticAge } from "../src/GalacticAge.js"

describe('GalacticAge Constructor', () => {
  test('should create earthAge value when passed an age', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.earthAge).toEqual(23);
  })
  test('should correctly calculated mercuryAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.mercuryAge).toEqual(95);
  })
  test('should correctly calculated venusAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.venusAge).toEqual(37);
  })
  test('should correctly calculated marsAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.marsAge).toEqual(12);
  })
  test('should correctly calculated jupiterAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.jupiterAge).toEqual(1);
  })
})
describe('calculateYearsLeft() method on GalacticAge Class', () => {
  test('should correctly calculated earthYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.earthYearsLeft).toEqual(127);
  })
  test('should correctly calculated mercuryYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.mercuryYearsLeft).toEqual(529);
  })
  test('should correctly calculated venusYearsleft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.venusYearsLeft).toEqual(204);
  })
  test('should correctly calculated marsYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.marsYearsLeft).toEqual(67);
  })
  test('should correctly calculated jupiterYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.jupiterYearsLeft).toEqual(10);
  })
})
describe('calculateLifeChoices() method on GalacticAge Class', () => {
  test('should multiply earthYearsLeft by 1.2 if first parameter is "space"', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateLifeChoices("space");
    expect(gAge.earthYearsLeft).toEqual(152);
  })
  test('should multiply earthYearsLeft by 1.2 if second parameter is "sciFi"', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateLifeChoices("space", "sciFi");
    expect(gAge.earthYearsLeft).toEqual(182);
  })
  test('should add 100 to earthYearsLeft if third parameter is true', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateLifeChoices("space", "sciFi", true);
    expect(gAge.earthYearsLeft).toEqual(282);
  })
})
describe('calculateCheatDeath() method on GalacticAge Class', () => {
  test('should create yearsCheatedDeath value if earthAge is greater than 150 equal to the years after 150', () => {
    let gAge = new GalacticAge(173);
    gAge.calculateCheatDeath();
    expect(gAge.earthYearsCheatedDeath).toEqual(23);
  })
  test('should correctly calculate mercuryYearsCheatedDeath based on earthYearsCheatedDeath', () => {
    let gAge = new GalacticAge(173);
    gAge.calculateCheatDeath();
    expect(gAge.mercuryYearsCheatedDeath).toEqual(95);
  })
  test('should correctly calculate venusYearsCheatedDeath based on earthYearsCheatedDeath', () => {
    let gAge = new GalacticAge(173);
    gAge.calculateCheatDeath();
    expect(gAge.venusYearsCheatedDeath).toEqual(37);
  })
  test('should correctly calculate marsYearsCheatedDeath based on earthYearsCheatedDeath', () => {
    let gAge = new GalacticAge(173);
    gAge.calculateCheatDeath();
    expect(gAge.marsYearsCheatedDeath).toEqual(12);
  })
})