import { GalacticAge } from "../src/GalacticAge.js"

describe('GalacticAge Constructor', () => {
  test('should validate that when passed an age, earthAge value is created', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.earthAge).toEqual(23);
  })
  test('should check for correctly calculated mercuryAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.mercuryAge).toEqual(95);
  })
  test('should check for correctly calculated venusAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.venusAge).toEqual(37);
  })
  test('should check for correctly calculated marsAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.marsAge).toEqual(12);
  })
  test('should check for correctly calculated jupiterAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.jupiterAge).toEqual(1);
  })
})
describe('calculateYearsLeft() method on GalacticAge Class', () => {
  test('should check for correctly calculated earthYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.earthYearsLeft).toEqual(127);
  })
  test('should check for correctly calculated mercuryYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.mercuryYearsLeft).toEqual(529);
  })
  test('should check for correctly calculated venusYearsleft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.venusYearsLeft).toEqual(204);
  })
  test('should check for correctly calculated marsYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.marsYearsLeft).toEqual(67);
  })
  test('should check for correctly calculated jupiterYearsLeft', () => {
    let gAge = new GalacticAge(23);
    gAge.calculateYearsLeft();
    expect(gAge.jupiterYearsLeft).toEqual(10);
  })
})