'use strict'

const args = process.argv

console.log('Args')
console.log(args)

let settings = {
  url: '',
  poll: true,
  sitemap: true,
} 

const validURL = str => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

const processArgs = (args, settings) => {
  let url = args[2]

  if (url && !url.startsWith('http')) {
    url = 'http://' + url
  }

  if (!validURL(url)) {
    console.log('Invalid url')
  }

  const poll = args
    .filter((item, i) => item === '--poll' && args[++i] === 'false')
    .length === 1 ? false : true

  return Object.assign(settings, {
    url: url,
    poll: poll
  })
}

console.log(processArgs(args, settings))

