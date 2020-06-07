'use strict'

const parseXMLtoJSON = require('./lib/parseXMLtoJSON').parseXMLtoJSON
const convertSitemapToArrayOfUrls = require('./lib/parseXMLtoJSON').convertSitemapToArrayOfUrls
const xml = require('../TestData/testdata').xml

const findUltimateUrls = arr => {
  console.log(arr)
  const hmm = arr.map(item => item.split('/'))
  console.log(hmm.map((a, i) => {
    // console.log(a)
    return `${a[0]}//${a[1]}/${a[2]}/${i === 1 ? a[3] : hmm[0][3]}`
  }))
  return 'hello world'
}

  ; (async () => {
    try {
      console.log('Parsing to json')
      const json = await parseXMLtoJSON(xml)
      console.log('Extract urls')
      const arr = convertSitemapToArrayOfUrls(json)
      const listOfUrlToFetch = findUltimateUrls(arr)
      console.log(listOfUrlToFetch)
    } catch (e) {
      console.log(e)
    }

  })()


// console.log('Crawling site')

// console.log('Send message with status')