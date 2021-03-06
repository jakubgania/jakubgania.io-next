/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

var black = '#000000'
var black100 = black
var white = '#ffffff'
var white0 = white
var yellow = '#f1c21b'
var yellow30 = yellow
var orange = '#ff832b'
var orange40 = orange
var red10 = '#fff1f1'
var red20 = '#ffd7d9'
var red30 = '#ffb3b8'
var red40 = '#ff8389'
var red50 = '#fa4d56'
var red60 = '#da1e28'
var red70 = '#a2191f'
var red80 = '#750e13'
var red90 = '#520408'
var red100 = '#2d0709'
var red = {
  10: red10,
  20: red20,
  30: red30,
  40: red40,
  50: red50,
  60: red60,
  70: red70,
  80: red80,
  90: red90,
  100: red100
}
var magenta10 = '#fff0f7'
var magenta20 = '#ffd6e8'
var magenta30 = '#ffafd2'
var magenta40 = '#ff7eb6'
var magenta50 = '#ee5396'
var magenta60 = '#d12771'
var magenta70 = '#9f1853'
var magenta80 = '#740937'
var magenta90 = '#510224'
var magenta100 = '#2a0a18'
var magenta = {
  10: magenta10,
  20: magenta20,
  30: magenta30,
  40: magenta40,
  50: magenta50,
  60: magenta60,
  70: magenta70,
  80: magenta80,
  90: magenta90,
  100: magenta100
}
var purple10 = '#f6f2ff'
var purple20 = '#e8daff'
var purple30 = '#d4bbff'
var purple40 = '#be95ff'
var purple50 = '#a56eff'
var purple60 = '#8a3ffc'
var purple70 = '#6929c4'
var purple80 = '#491d8b'
var purple90 = '#31135e'
var purple100 = '#1c0f30'
var purple = {
  10: purple10,
  20: purple20,
  30: purple30,
  40: purple40,
  50: purple50,
  60: purple60,
  70: purple70,
  80: purple80,
  90: purple90,
  100: purple100
}
var blue10 = '#edf5ff'
var blue20 = '#d0e2ff'
var blue30 = '#a6c8ff'
var blue40 = '#78a9ff'
var blue50 = '#4589ff'
var blue60 = '#0f62fe'
var blue70 = '#0043ce'
var blue80 = '#002d9c'
var blue90 = '#001d6c'
var blue100 = '#001141'
var blue = {
  10: blue10,
  20: blue20,
  30: blue30,
  40: blue40,
  50: blue50,
  60: blue60,
  70: blue70,
  80: blue80,
  90: blue90,
  100: blue100
}
var cyan10 = '#e5f6ff'
var cyan20 = '#bae6ff'
var cyan30 = '#82cfff'
var cyan40 = '#33b1ff'
var cyan50 = '#1192e8'
var cyan60 = '#0072c3'
var cyan70 = '#00539a'
var cyan80 = '#003a6d'
var cyan90 = '#012749'
var cyan100 = '#061727'
var cyan = {
  10: cyan10,
  20: cyan20,
  30: cyan30,
  40: cyan40,
  50: cyan50,
  60: cyan60,
  70: cyan70,
  80: cyan80,
  90: cyan90,
  100: cyan100
}
var teal10 = '#d9fbfb'
var teal20 = '#9ef0f0'
var teal30 = '#3ddbd9'
var teal40 = '#08bdba'
var teal50 = '#009d9a'
var teal60 = '#007d79'
var teal70 = '#005d5d'
var teal80 = '#004144'
var teal90 = '#022b30'
var teal100 = '#081a1c'
var teal = {
  10: teal10,
  20: teal20,
  30: teal30,
  40: teal40,
  50: teal50,
  60: teal60,
  70: teal70,
  80: teal80,
  90: teal90,
  100: teal100
}
var green10 = '#defbe6'
var green20 = '#a7f0ba'
var green30 = '#6fdc8c'
var green40 = '#42be65'
var green50 = '#24a148'
var green60 = '#198038'
var green70 = '#0e6027'
var green80 = '#044317'
var green90 = '#022d0d'
var green100 = '#071908'
var green = {
  10: green10,
  20: green20,
  30: green30,
  40: green40,
  50: green50,
  60: green60,
  70: green70,
  80: green80,
  90: green90,
  100: green100
}
var gray10 = '#f4f4f4'
var gray20 = '#e0e0e0'
var gray30 = '#c6c6c6'
var gray40 = '#a8a8a8'
var gray50 = '#8d8d8d'
var gray60 = '#6f6f6f'
var gray70 = '#525252'
var gray80 = '#393939'
var gray85 = '#333333'
var gray90 = '#262626'
var gray95 = '#212121'
var gray100 = '#161616'
var gray = {
  10: gray10,
  20: gray20,
  30: gray30,
  40: gray40,
  50: gray50,
  60: gray60,
  70: gray70,
  80: gray80,
  85: gray85,
  90: gray90,
  95: gray95,
  100: gray100
}

const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  // theme: {},
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.6xl') },
        'h2': { fontSize: config('theme.fontSize.5xl') },
        'h3': { fontSize: config('theme.fontSize.4xl') },
        'h4': { fontSize: config('theme.fontSize.3xl') },
        'h5': { fontSize: config('theme.fontSize.2xl') },
        'h6': { fontSize: config('theme.fontSize.1xl') },
      })
    })
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    future: {
      removeDeprecatedGapUtilities: true
    },
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    // darkSelector: '.dark-mode',
    colors: {
      /* via IBM Carbon System */
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: gray,
      red: red,
      purple: purple,
      blue: blue,
      cyan: cyan,
      teal: teal,
      green: green,
      magenta: magenta,
      yellow: yellow,
      orange: orange
    },
    extend: {
      spacing: {
        '15': '.375rem'
      }
    }
  },
}
