'use strict'

const fetchUrls = require('./lib/fetchUrls').fetchUrls
const shuffleArray = require('./lib/shuffleArray').shuffleArray
const fetchSitemap = require('./lib/fetchSitemap').fetchSitemap

  ; (async () => {
    try {
      // const url = 'https://hk-fw-test.azurewebsites.net/sitemap.xml'
      const url = 'https://www.tieto.com/sitemap.xml'
      // const url = 'https://www.tietoevry.com/sitemap.xml'
      // const url = 'https://developer.mozilla.org/sitemap.xml'
      // const url = 'https://www.konsumentverket.se/sitemap.xml'

      const arr = await fetchSitemap(url)

      console.log('shuffle arr')
      const shuffled = shuffleArray(arr)
      const sliced = shuffled.slice(0, 100)

      const result = await fetchUrls(sliced)
      console.log(`Tested ${sliced.length} urls`)
      // console.log(result)
      const filterRemoveWorking = result.filter(item => item.status !== 200)
      console.log(filterRemoveWorking)


    } catch (e) {
      console.log(e)
    }

  })()