'use strict'

const fetchSitemap = require('../src/lib/fetchSitemap').fetchSitemap
const replaceDomainName = require('../src/lib/replaceDomainName').replaceDomainName
const shuffleArray = require('../src/lib/shuffleArray').shuffleArray
const fetchUrls = require('../src/lib/fetchUrls').fetchUrls
const sendWebhook = require('../src/lib/sendWebhook').sendWebhook

module.exports = async function (context, req) {
    try {
        const key = process.env["key"]
        if (req.headers['key'] !== key) {
            context.res = {
                status: 500,
                body: 'hmmmmm'
            }
        }

        context.log('Crawl sitemap and check for status code on selection of urls');
        const numberOfScans = 100
        const slackurl = process.env["SLACK_URI"]
        const sitemapuri = process.env["SITEMAP_URI"]
        const replaceDomain = process.env["REPLACE_DOMAIN"]

        const sitemap = await fetchSitemap({
            url: sitemapuri,
            config: {
                poll: true
            }
        })

        const arrSelection = await replaceDomainName(sitemap, replaceDomain)
        const arrRandom = await shuffleArray(arrSelection)
        const urls = arrRandom.slice(0, numberOfScans)

        const result = await fetchUrls(urls)
        const filterRemoveWorking = result.filter(item => item.status !== 200)

        const errors = filterRemoveWorking.map(res => `${res.status}: ${res.url}\n`).join('')

        let slackMsg = ''
        if (result.length === 0) {
            slackMsg = `Pipeline till pre-prod\nScannade ${numberOfScans} slumpade urler och hittade 0 fel! Bra jobbat`
        } else {
            slackMsg = `Pipeline till pre-prod\nScannade ${numberOfScans} slumpade urler och hittade ${filterRemoveWorking.length} fel!\n${errors}`
        }

        await sendWebhook(slackurl, slackMsg)

        context.res = {
            status: 200,
            body: slackMsg
        }
    } catch (e) {
        context.log(e)
        context.res = {
            status: 500,
            error: e
        };
    }
}