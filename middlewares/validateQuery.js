const { response } = require('../helpers')

module.exports = schema => (req,res,next) => {
   const { error } = schema.validate(req.query,{
      stripUnknown: false,
      allowUnknown: false,
      abortEarly: true
   })

   if(error) {
      return response(res,400,error.details[0].message)
   }

   return next()
}
