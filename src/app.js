'use strict'

const parseXMLtoJSON = require('./lib/parseXMLtoJSON')
const xml = require('../testdata').xml

  ; (async () => {
    // console.log('Fetching sitemap.xml')
    console.log('Parsing to json')
    try {
      const result = await parseXMLtoJSON(xml)
      console.log(result)
    } catch (e) {
      console.log(e)
    }

  })()

// console.log('Extract urls')

// console.log('Crawling site')

// console.log('Send message with status')