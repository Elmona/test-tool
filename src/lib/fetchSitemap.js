'use strict'

const parseXMLtoJSON = require('./parseXMLtoJSON').parseXMLtoJSON
const convertSitemapToArrayOfUrls = require('./parseXMLtoJSON').convertSitemapToArrayOfUrls
const poll = require('../lib/promisePoller').poll

const fetch = require('node-fetch')


const fetchSitemap = async ({ url, config }) => {

  const getSitemap = () => fetch(url)
  const validate = res => res.status === 200

  let res

  if (config.poll === true) {
    res = await poll({
      message: 'Tried to fetch Sitemap',
      fn: getSitemap,
      validate: validate,
      interval: 2000,
      maxAttempts: 2000
    })
    res = await res.text()
  } else {
    res = await getSitemap(url).then(res => res.text())
  }

  const json = await parseXMLtoJSON(res)

  return convertSitemapToArrayOfUrls(json)
}

module.exports = {
  fetchSitemap
}