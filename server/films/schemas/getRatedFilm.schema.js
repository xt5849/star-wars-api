const Joi = require('joi')

module.exports = Joi.object({
   fechaInicio: Joi.date(),
   fechaFinal: Joi.date(),
})
