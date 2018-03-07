const { readFileSync } = require('fs')
const md = require('markdown-it')()
const { send } = require('micro')
const logger = require('./logger')

exports.addDocument = (request, response) => {
  logger('info', ['handlers', 'addDocument'])
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}

exports.deleteIndex = (request, response) => {
  logger('info', ['handlers', 'deleteIndex'])
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}

exports.doSearch = (request, response) => {
  logger('info', ['handlers', 'doSearch'])
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}

exports.getFrontpage = (request, response) => {
  logger('info', ['handlers', 'getFrontpage'])
  const readme = readFileSync('./README.md', 'utf-8')
  send(response, 200, md.render(readme))
}
