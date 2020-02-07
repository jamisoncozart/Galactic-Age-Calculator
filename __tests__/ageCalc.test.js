import { GalacticAge } from "./../src/ageCalc.js"

describe('GalacticAge Constructor', () => {
  test('should validate that when passed an age, earthAge value is created', () => {
    let gAge = new GalacticAge(23);
    expect(gAge.earthAge).toEqual(23);
  })
})