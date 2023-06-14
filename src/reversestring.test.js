/* eslint-disable no-undef */
const reverseString = require('./reversestring')



describe('reverseString', () => {
  test('reverse the strings', () => {
    expect(reverseString('Spider-Man')).toBe('naM-redipS');
  });
  test(' reverse the string', () => {
    expect(reverseString('The boy')).toBe('yob ehT');
  });
  })