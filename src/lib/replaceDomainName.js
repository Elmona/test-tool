'use strict'

const splitAndReturnUriWithoutDomain = item => {
  const split = item.split('/')
  return split.splice(3, split.length).join('/')
}

const replaceDomainName = (arr, domainName) => 
  arr.map(item => `${domainName}/${splitAndReturnUriWithoutDomain(item)}`)

module.exports = {
  replaceDomainName
}