const response = require('./response')

exports.routeError = (req,res,_next) => {
   return response({
      res,
      code: 404,
      message: `Ruta \'${req.method} ${req.originalUrl}\' no encontrada.`
   })
}

exports.genericError = (error,_req,res,_next) => {
   console.error(error.message,error.stack)
   return response({
      res,
      code: 500,
      message: error.message
   })
}
