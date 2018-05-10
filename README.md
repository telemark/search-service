[![Build Status](https://travis-ci.org/telemark/search-service.svg?branch=master)](https://travis-ci.org/telemark/search-service)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# search-service

Search/indexing frontend for our ElasticSearch

## API

GETs and POSTs are open.

PUTs and DELETEs requires a valid jwt

### GET /

Returns this page

### PUT /api/documents

Adds a new document to index.

You'll need do supply index, type, id and the document itself in the body property. See the [example](test/data/document.json)

http PUT http://localhost:3000/api/documents Authorization:'Bearer <jwt-token>' < test/data/document.json

returns

```JavaScript
{
    "_id": "1",
    "_index": "test",
    "_primary_term": 1,
    "_seq_no": 0,
    "_shards": {
        "failed": 0,
        "successful": 1,
        "total": 2
    },
    "_type": "document",
    "_version": 1,
    "result": "created"
}
```

### GET /api/search

Search indexed documents with a regular GET request

```sh
$ http GET http://localhost:3000/api/search?q=wunderbar
```

returns

```JavaScript
{
    "_shards": {
        "failed": 0,
        "skipped": 0,
        "successful": 6,
        "total": 6
    },
    "hits": {
        "hits": [
            {
                "_id": "1",
                "_index": "test",
                "_score": 0.2876821,
                "_source": {
                    "description": "A short story about my feelings",
                    "title": "I feel wunderbar"
                },
                "_type": "document"
            }
        ],
        "max_score": 0.2876821,
        "total": 1
    },
    "timed_out": false,
    "took": 59
}
```

### POST /api/search

Search indexed documents by POSTing a json request

```sh
$ http POST http://localhost:3000/api/search q=wunderbar
```

```JavaScript
{
    "_shards": {
        "failed": 0,
        "skipped": 0,
        "successful": 6,
        "total": 6
    },
    "hits": {
        "hits": [
            {
                "_id": "1",
                "_index": "test",
                "_score": 0.2876821,
                "_source": {
                    "description": "A short story about my feelings",
                    "title": "I feel wunderbar"
                },
                "_type": "document"
            }
        ],
        "max_score": 0.2876821,
        "total": 1
    },
    "timed_out": false,
    "took": 59
}
```

### DELETE /api/indexes/:index

Deletes a given index

```sh
$ http DELETE http://localhost:3000/api/indexes/test Authorization:'Bearer <jwt-token>'
```

returns

```JavaScript
{
    "acknowledged": true
}
```

### GET /api/ping

Ping for pong

```sh
$ http GET http://localhost:3000/api/ping
```

returns

```sh
pong
```

## Licence

[MIT](LICENSE)

![Robohash image of search-service](https://robots.kebabstudios.party/search-service.png "Robohash image of search-service")