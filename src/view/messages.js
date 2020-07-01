'use strict'

const everydaySE = [
  'Ojda, hittade något under natten. Kolla här.',
  'Whoops, finns lite att fixa idag.',
  'Ajda :-(',
  'Oj, något gick fel under natten. Jag tror att det var katten.',
]

const everydayEN = [
  'The nightly check went wrong.',
  'Hello team, you have some things to look at today.',
  'Whoops :-(',
]

const getEveryDayQuote = lang => lang === 'se' ?
  everydaySE[Math.floor(Math.random(everydaySE.length))]
  : everydayEN[Math.floor(Math.random(everydayEN.length))]

const scores = {
  top: {
    se: [
      'Man kan inte bli bättre, bra jobbat.',
      'Superbra!!',
      'Perfekta poäng!',
    ],
    en: [
      '',
      '',
    ]
  },
  middle: {
    se: [
      'Finns en del saker att förbättra.',
      'Lite bättre kan du.',
    ],
    en: [
      '',
      '',
    ]
  },
  bottom: {
    se: [
      'Du har en hel del att förbättra.',
      'Ojda, en hel del saker att förbättra.',
    ],
    en: [
      '',
      '',
    ]
  },
  worst: {
    se: [
      'Ganska mycket arbete att göra.',
      'Ser inte så värst bra ut.',
    ],
    en: [
      'You suck',
      '',
    ]
  },
  wrong: {
    se: [
      'Nagot gick fel, prova en annan url',
      '',
    ],
    en: [
      'Something went wrong try another url',
      '',
    ]
  }
}

module.exports = {
  getEveryDayQuote,
  scores,
}