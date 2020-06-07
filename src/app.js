'use strict'

const parseXMLtoJSON = require('./lib/parseXMLtoJSON').parseXMLtoJSON
const convertSitemapToArrayOfUrls = require('./lib/parseXMLtoJSON').convertSitemapToArrayOfUrls
const fetchUrls = require('./lib/fetchUrls').fetchUrls

const xml = require('../TestData/testdata').xml

  ; (async () => {
    try {
      console.log('Parsing to json')
      const json = await parseXMLtoJSON(xml)
      console.log('Extract urls')
      const arr = convertSitemapToArrayOfUrls(json)
      console.log(arr)
      console.log('Fetching urls')
      const result = await fetchUrls(arr)
      console.log(result)


    } catch (e) {
      console.log(e)
    }

  })()


// console.log('Crawling site')

// console.log('Send message with status')