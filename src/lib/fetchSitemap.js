'use strict'

const parseXMLtoJSON = require('./parseXMLtoJSON').parseXMLtoJSON
const convertSitemapToArrayOfUrls = require('./parseXMLtoJSON').convertSitemapToArrayOfUrls
const fetch = require('node-fetch')

const fetchSitemap = async url => {
  const res = await fetch(url)
    .then(res => res.text())

  const json = await parseXMLtoJSON(res)
  return convertSitemapToArrayOfUrls(json)
}

module.exports = {
  fetchSitemap
}