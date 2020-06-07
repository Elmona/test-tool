'use strict'

const fetch = require('node-fetch')

const fetchUrls = async arr => {
  const fetches = arr.map(url =>
    fetch(url)
  )

  const result = await Promise.all(fetches)

  const resultMap = result.map(item => {
    return {
      url: item.url,
      status: item.status
    }
  })

  return resultMap
}

module.exports = {
  fetchUrls
}