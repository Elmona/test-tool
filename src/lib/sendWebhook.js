'use strict'

const fetch = require('node-fetch')

const sendWebhook = async (url, message) => {
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      text: message
    })
  })
}

module.exports = {
  sendWebhook
}