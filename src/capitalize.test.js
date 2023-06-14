/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const capitalize = require('./capitalize');

test ('Capitalizing the first word', () =>{
  const input = 'name'
  const output = 'Name'
  const resut = capitalize(input)
  expect(resut).toBe(output)
})