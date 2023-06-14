/* eslint-disable no-undef */
const analyzeArray = require('./analyzeArray')

describe ('Shows min, max, avg and length', () =>{
    test('testing file', () =>{
        // eslint-disable-next-line quotes
        expect(analyzeArray(...[30,25,30])).toEqual({"average": 28, "length": 3, "max": 30,"min": 25})
    })
})



