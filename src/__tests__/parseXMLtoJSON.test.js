const xml = require('../../TestData/testdata').xml
const brokenXml = require('../../TestData/testdata').brokenXml

const parseXMLtoJSON = require('../lib/parseXMLtoJSON').parseXMLtoJSON
const convertSitemapToArrayOfUrls = require('../lib/parseXMLtoJSON').convertSitemapToArrayOfUrls

describe("Parsing xml to json tests", () => {
  test("Testdata to be string", () => {
    expect(typeof xml).toBe('string')
  })

  test("Parse string and except object", async () => {
    const result = await parseXMLtoJSON(xml)
    expect(typeof result).toBe('object')
  })

  test('Expecting to get an array of urls', async () => {
    const result = await parseXMLtoJSON(xml)
    const urlList = await convertSitemapToArrayOfUrls(result)

    expect(Array.isArray(urlList))
      .toBe(true)

    expect(urlList.length)
      .toBe(3)
  })

})