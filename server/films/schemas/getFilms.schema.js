const Joi = require('joi')

module.exports = Joi.object({
   number: Joi.number().min(1),
   order: Joi.string().valid('ASC', 'DESC'),
   fechaInicio: Joi.date(),
   fechaFinal: Joi.date(),
})
