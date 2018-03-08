// Packages
const Router = require('router')
const finalhandler = require('finalhandler')
const cors = require('cors')
const jwt = require('express-jwt')

// Utilities
const views = require('./lib/handlers-view')
const api = require('./lib/handlers-api')
const config = require('./config')
const handleUnauthorized = require('./lib/handle-unauthorized')

// Initialize a new router
const router = Router()

// CORS
router.use(cors())

// JWT
router.use(jwt({secret: config.JWT_SECRET}).unless({path: ['/', '/api/search', '/api/ping']}))
router.use(handleUnauthorized)

// ROUTES
router.get('/', views.getFrontpage)
router.put('/api/documents', api.addDocument)
router.get('/api/search', api.doSearch)
router.post('/api/search', api.doSearch)
router.delete('/api/:index', api.deleteIndex)
router.get('/api/ping', api.ping)

module.exports = (request, response) => {
  router(request, response, finalhandler(request, response))
}
