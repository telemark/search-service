const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { send } = require('micro')
const logger = require('./logger')

exports.getFrontpage = (request, response) => {
  logger('info', ['handlers', 'getFrontpage'])
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}
