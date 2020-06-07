'use strict'

const filterUrl = require('../lib/filterUrl').filterUrl

const testArray = [
  'https://www.example.com',
  'https://www.example.com/artikel/forsta',
  'https://www.example.com/artikel/andra',
  'https://www.example.com/artikel/tredje',
  'https://www.example.com/artikel/fjarde',
  'https://www.example.com/artikel/om/forsta',
  'https://www.example.com/artikel/om/andra',
]

describe('Testing the filter function', () => {
  test('filterUrl to be function', () => {
    expect(typeof filterUrl).toBe('function')
  })

  test('Expect to test every route', () => {
    const result = filterUrl(testArray)

    expect(result).toBe([
      'https://www.example.com',
      'https://www.example.com/artikel',
      'https://www.example.com/artikel/forsta',
      'https://www.example.com/artikel/om',
      'https://www.example.com/artikel/om/forsta',
    ])
  })

  // TODO: Write unit test to add funcationality to get random routes for maximum coverage 

  test('Every route should be unique', () => {
    const result = filterUrl(testArray)

    expect(result.filter((e, i, a) => a.indexOf(e) !== i).length).toBe(0)
  })
})
