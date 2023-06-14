/* eslint-disable no-sequences */
/* eslint-disable no-undef */

const calculator = require('./calculator')

describe ('calculate', () =>{
    test('add values', () => {
        expect(calculator.add(2,3)).toBe(5)
    })
    test('subtract values', () =>{
        expect(calculator.sub(3,2)).toBe(1)
    })
    test('multiply values', () =>{
        expect(calculator.mul(3,2)).toBe(6)
    })
    test('divide values', () =>{
        expect(calculator.div(12,2)).toBe(6)
    })
})