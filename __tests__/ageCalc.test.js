import { GalacticAge } from "./../src/ageCalc.js"

describe('GalacticAge Constructor', () => {
  test('should validate that when passed an age, earthAge value is created', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.earthAge).toEqual(23);
  })
  test('should check for correctly calculated mercuryAge', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.mercuryAge).toEqual(95);
  })
})