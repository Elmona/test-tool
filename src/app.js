'use strict'

const fetchUrls = require('./lib/fetchUrls').fetchUrls
const startCrawl = require('./lib/crawl').startCrawl

  ; (async () => {
    try {

      const result = await startCrawl('https://www.example.com')
      console.log(result)

    } catch (e) {
      console.log(e)
    }

  })()