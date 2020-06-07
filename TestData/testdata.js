
const xml = `
<urlset>
  <url>
    <lastmod>2020-05-06</lastmod>
  <loc>
    https://example.com/varor-och-tjanster-process/bil-fel-pa-bil-kopt-fran-bilfirma/
  </loc>
  </url>
  <url>
    <lastmod>2020-05-06</lastmod>
  <loc>
    https://example.com/annan
  </loc>
  </url>
  <url>
    <lastmod>2020-05-06</lastmod>
  <loc>
    https://example.com/tredje
  </loc>
  </url>
</urlset>
`

const brokenXml = `
<urlse
  <url>
    <lastmod>2020-05-06</lastmod>
    https://example.com
  </loc>
  </url>
</urlset>
`

module.exports = {
  xml,
  brokenXml
}