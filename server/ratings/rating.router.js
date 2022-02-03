const { Router } = require('express')
const router = Router()

const controller = require('./rating.controller')
const schemas = require('./schemas')
const {
   validateQuery,
   validateBody
} = require('../../middlewares')

router.post(
   '/',
   validateBody(schemas.createRating),
   controller.createRating
)

module.exports = router
