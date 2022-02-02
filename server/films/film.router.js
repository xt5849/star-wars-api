const { Router } = require('express')
const router = Router()

const controller = require('./film.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody,
   validateId
} = require('../../middlewares')

router.get(
   '/swapi',
   validateQuery(schemas.getSwapi),
   controller.getSwapi
)

router.get(
   '/:id/rated',
   validateId,
   validateQuery(schemas.getRatedFilm),
   controller.getRatedFilm
)

module.exports = router
