const fetch = require('node-fetch')

const parser = require('fast-xml-parser');
const he = require('he');
const options = {
    attributeNamePrefix: "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName: "#text",
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),//default is a=>a
    tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
}

// TODO
// const name = (req.query.name || (req.body && req.body.name));
// const responseMessage = name
//     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

module.exports = async function (context, req) {
    try {
        context.log('Crawl sitemap and check for status code on selection of urls');

        const url = 'https://hk-fw-test.azurewebsites.net/sitemap.xml'

        const fetchDataFromSitemap = await fetch(url)
            .then(res => res.text())
        // .then(res => parser.parse(res, options))

        // const parsed = await parser.parse(fetchDataFromSitemap, options)
        var json = await parser.convertToJson(fetchDataFromSitemap, options);

        const result = json.map(item => item)
        // const result = typeof JSON.parse(json)

        context.res = {
            status: 200,
            body: result
        };
    } catch (e) {
        context.log(e)
        context.res = {
            status: 500,
            error: e
        };
    }
}