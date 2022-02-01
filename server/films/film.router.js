const { Router } = require('express')
const router = Router()

router.get('/', async (_req,res) => {
   return res.json({message: 'hola mundo'})
})

module.exports = router
