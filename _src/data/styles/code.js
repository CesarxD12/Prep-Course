const Cache = require('@11ty/eleventy-cache-assets')
const { redondearHaciaArriba } = require('../../../02-JS-I/homework/homework')

module.exports = async function () {
  const url = 'https://d31uz8lwfmyn8g.cloudfront.net/Styles/code.css'
  const style = await Cache(url, {
    duration: '1d',
    type: 'txt',
    directory: '_cache'
  })
  return style
}
p{ color: red
}