'use strict'

const shuffleArray = function (arr) {
  let n = arr.length
  let temp

  while (n) {
    let i = Math.floor(Math.random() * n--)
    temp = arr[n]
    arr[n] = arr[i]
    arr[i] = temp
  }

  return arr
}

module.exports = {
  shuffleArray
}