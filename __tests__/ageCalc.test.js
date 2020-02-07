import { GalacticAge } from "./../src/ageCalc.js"

describe('GalacticAge Constructor', () => {
  test('should return "error" if user inputs nothing', () => {
    let gAge = new GalacticAge();
    expect(gAge).toEqual("Error");
  })
})