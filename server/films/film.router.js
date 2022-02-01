const { Router } = require('express')
const router = Router()

const services = require('./services')

router.get('/', async (_req,res) => {
   const ans = await services.get()
   return res.json(ans)
})

module.exports = router
