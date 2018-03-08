[![Build Status](https://travis-ci.org/telemark/search-service.svg?branch=master)](https://travis-ci.org/telemark/search-service)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/micro-logs-main.svg)](https://greenkeeper.io/)

# search-service

Search/indexing frontend for out ElasticSearch

## API

GETs and POSTs are open.

PUTs and DELETEs requires a valid jwt

### GET /

Returns this page

### PUT /api/documents

Adds a new document to the index

### GET /api/search

Search indexed documents

### POST /api/search

Search indexed documents

### DELETE /api/:index

Deletes a given index

### GET /api/ping

Ping for pong

## Licence

[MIT](LICENSE)

![Robohash image of search-service](https://robots.kebabstudios.party/search-service.png "Robohash image of search-service")