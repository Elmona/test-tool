'use strict'

const fetch = require('node-fetch')
const cheerio = require('cheerio')

let numPagesVisited = 0
const pageVisited = {}
const pageToVisit = []
let baseUrl

const startCrawl = async url => {
  baseUrl = url
  await fetchPage('/')

  while (pageToVisit.length > 0) {
    const page = pageToVisit.pop()
    if (!(page in pageVisited)) {
      await fetchPage(page)
    } 
  }

  console.log(pageToVisit)
  console.log(pageVisited)
}


const fetchPage = url => {
  return fetch(`${baseUrl}${url}`).then(async res => {
    pageVisited[url] = {
      visited: true,
      status: res.status
    }

    const extractedUrls = extractLinksFromDOM(await res.text())
    extractedUrls.forEach(extracedUrl => {
      pageToVisit.push(extracedUrl)
    })

    return
  }).catch(e => {
    console.log(e)
    pageVisited[url] = {
      visited: true,
      error: e
    }
  })
}

const extractLinksFromDOM = text => {
  const $ = cheerio.load(text)
  const links = []
  $('body').find("a[href^='/']").each((i, link) => {
    if (link.attribs.href !== undefined) {
      links.push(link.attribs.href)
    }
  })
  return links
}

module.exports = {
  startCrawl: startCrawl
}