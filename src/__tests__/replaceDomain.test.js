'use strict'

const replaceDomainName = require('../lib/replaceDomainName').replaceDomainName

describe('Testing the replace domain name function', () => {
  test('Replacing domain name with test.com', () => {
    const testArray = [
      'https://www.example.com/artikel/andra',
      'https://www.example.com/',
    ]
    const result = replaceDomainName(testArray, 'http://www.test.com')

    expect(result).toBe([
      'http://www.test.com/artikel/andra',
      'http://www.test.com/',
    ])
  })
})