const elasticsearch = require('elasticsearch')
const { parse } = require('url')
const { json, send } = require('micro')
const config = require('../config')
const client = new elasticsearch.Client({
  host: config.ELASTIC_HOST,
  log: 'error'
})
const logger = require('./logger')

exports.addDocument = async (request, response) => {
  logger('info', ['api', 'addDocument'])
  try {
    const document = await json(request)
    const result = await client.create(document)
    send(response, 200, result)
  } catch (error) {
    logger('error', ['api', 'addDoument', error])
    send(response, 500, error)
  }
}

exports.deleteIndex = (request, response) => {
  logger('info', ['api', 'deleteIndex'])
  const data = {
    index: request.params.index
  }
  client.indices.delete(data, (error, result) => {
    if (error) {
      if (error.status && error.status === 404) {
        logger('info', ['api', 'deleteIndex', data.index, 'no index to delete', 'success'])
        send(response, 200, { msg: 'no index to delete' })
      } else {
        logger('error', ['api', 'deleteIndex', data.index, error])
        send(response, 500, error)
      }
    } else {
      logger('info', ['api', 'deleteIndex', data.index, 'success'])
      send(response, 200, result)
    }
  })
}

exports.doSearch = async (request, response) => {
  logger('info', ['api', 'doSearch'])
  const { query } = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  try {
    const result = await client.search(data)
    send(response, 200, result)
  } catch (error) {
    logger('error', ['api', 'doSearch', error])
    send(response, 500, error)
  }
}

exports.ping = async (request, response) => {
  logger('info', ['api', 'ping'])
  try {
    await client.ping()
    send(response, 200, 'pong')
  } catch (error) {
    logger('error', ['api', 'ping', error])
    send(response, 500, error)
  }
}
