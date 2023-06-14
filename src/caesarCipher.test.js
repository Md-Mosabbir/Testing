/* eslint-disable no-undef */
const caesarCipher = require('./caesarCipher')


describe('shifts letters', () =>{
    test('shifts by 1', () =>{
        expect(caesarCipher('Game', 1)).toBe('Hbnf')
    })
})