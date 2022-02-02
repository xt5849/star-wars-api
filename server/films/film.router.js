const { Router } = require('express')
const router = Router()

const controller = require('./film.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody
} = require('../../middlewares')

router.get(
   '/swapi',
   validateQuery(schemas.getSwapi),
   controller.getSwapi
)

module.exports = router
