const { response } = require('../helpers')

exports.routeError = (req,res,_next) => {
   return response(
      res,
      404,
      `Ruta \'${req.method} ${req.originalUrl}\' no encontrada.`
   )
}

exports.genericError = (error,_req,res,_next) => {
   console.error(error.message,error.stack)
   return response(
      res,
      500,
      error.message
   )
}
