const fetch = require('node-fetch')

module.exports = async function (context, req) {
    try {
        context.log('Crawl sitemap and check for status code on selection of urls');

        const url = 'https://hk-fw-test.azurewebsites.net/sitemap.xml'

        const fetchDataFromSitemap = await fetch(url)
            .then(res => res.text())

        context.res = {
            status: 200,
            body: result
        }
    } catch (e) {
        context.log(e)
        context.res = {
            status: 500,
            error: e
        };
    }
}