const { Response: response } = require('../helpers')

module.exports = schema => (req,res,next) => {
   const { error } = schema.validate(req.query,{
      stripUnknown: true,
      allowUnknown: false,
      abortEarly: false
   })

   if(error) {
      return response(res,400,error.details[0].message)
   }

   return next()
}
