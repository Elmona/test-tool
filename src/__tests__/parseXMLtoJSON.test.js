const xml = require('../../testdata').xml
const parseXMLtoJSON = require('../lib/parseXMLtoJSON')

describe("Parsing xml to json tests", () => {
  test("Testdata to be string", () => {
    expect(typeof xml).toBe('string')
  })

  test("Parse string and except object", async () => {
    const result = await parseXMLtoJSON(xml)
    expect(typeof result).toBe('object')
  })

  test("Expect lengt of object to be NUMBER", async () => {
    const result = await parseXMLtoJSON(xml)
    // expect(result.length).toBe(4)
  })
})