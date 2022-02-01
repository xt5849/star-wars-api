const response = require('./response')

module.exports = (req,res,_next) => {
   return response({
      res,
      code: 404,
      message: `Ruta \'${req.method} ${req.originalUrl}\' no encontrada.`
   })
}
