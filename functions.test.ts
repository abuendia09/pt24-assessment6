const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const nums = [1, 2, 3, 4]

    test("have the same length", () => {
        expect(shuffleArray(nums)).toHaveLength(4)
    })
    test("to contain all the items in array", () => {
    expect([1, 2, 3, 4]).toEqual(expect.arrayContaining(shuffleArray(nums)))
    
    })
})