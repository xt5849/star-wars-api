const { response } = require('../helpers')

module.exports = (req,res,next) => {
   const id = Number(req.params.id)
   if(isNaN(id) || id < 1) {
      return response(res,400,'Formato de ID inválido')
   }
   return next()
}
