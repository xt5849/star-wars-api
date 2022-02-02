const { Router } = require('express')
const router = Router()

const controller = require('./film.controller')

router.get(
   '/swapi',
   controller.getSwapi
)

module.exports = router
