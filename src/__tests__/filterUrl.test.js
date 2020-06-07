'use strict'

const filterUrl = require('../lib/filterUrl').filterUrl


describe('Testing the filter function', () => {
  test('filterUrl to be function', () => {
    expect(typeof filterUrl).toBe('function')
  })

  test('Expect to test every route', () => {
    const testArray = [
      'https://www.example.com',
      'https://www.example.com/artikel/forsta',
      'https://www.example.com/artikel/andra',
      'https://www.example.com/artikel/tredje',
      'https://www.example.com/artikel/fjarde',
      'https://www.example.com/artikel/om/forsta',
      'https://www.example.com/artikel/om/andra',
      'https://www.example.com/a/b/c/d/e',
    ]
    const result = filterUrl(testArray)

    expect(result).toBe([
      'https://www.example.com',
      'https://www.example.com/artikel',
      'https://www.example.com/artikel/forsta',
      'https://www.example.com/artikel/om',
      'https://www.example.com/artikel/om/forsta',
      'https://www.example.com/a',
      'https://www.example.com/a/b',
      'https://www.example.com/a/b/c',
      'https://www.example.com/a/b/c/d/e',
    ])
  })

  // TODO: Write unit test to add funcationality to get random routes for maximum coverage 

  test('Every route should be unique', () => {
    const testArray = [
      'https://www.example.com/artikel/andra',
      'https://www.example.com/artikel/andra',
    ]
    const result = filterUrl(testArray)

    expect(result.filter((e, i, a) => a.indexOf(e) !== i).length).toBe(0)
  })

  test('Replacing domain name with test.com', () => {
    const testArray = [
      'https://www.example.com/artikel/andra',
    ]
    const result = filterUrl(testArray, 'http://www.test.com')

    expect(result).toBe([
      'http://www.test.com/artikel/andra',
      'http://www.test.com/artikel',
      'http://www.test.com/',

    ])
  })
})
