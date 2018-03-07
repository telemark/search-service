// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')
const jwt = require('express-jwt')

// Utilities
const handlers = require('./lib/handlers')
const config = require('./config')
const handleUnauthorized = require('./lib/handle-unauthorized')

// Initialize a new router
const router = Router()

// CORS
router.use(cors())

// JWT
router.use(jwt({secret: config.JWT_SECRET}).unless({path: ['/', '/api/search']}))
router.use(handleUnauthorized)

// ROUTES
router.get('/', handlers.getFrontpage)
router.put('/api', handlers.addDocument)
router.get('/api/search/:query', handlers.doSearch)
router.get('/api/search/index/:query', handlers.doSearch)
router.post('/api/search', handlers.doSearch)
router.post('/api/index', handlers.doSearch)
router.put('/api/index', handlers.addDocument)
router.delete('/api/index', handlers.deleteIndex)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}
