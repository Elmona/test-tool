'use strict'

const fetch = require('node-fetch')

const convertResult = arr => arr.map(item => {
  return {
    url: item.url,
    status: item.status
  }
})

const fetchUrls = async arr => {
  const arrayOfFunctions = arr.map(url => fetch(url, {
    headers: {
      'User-Agent': 'SitemapCrawler'
    }
  }))

  // TODO: If the array is to big we should not send all att once.

  const result = await Promise.all(arrayOfFunctions)

  return convertResult(result)
}

module.exports = {
  fetchUrls
}