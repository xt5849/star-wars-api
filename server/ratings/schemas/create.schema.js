const Joi = require('joi')

module.exports = Joi.object({
   puntaje: Joi.number().min(0).max(10).required(),
   comentarios: Joi.string().empty(""),
   personajeId: Joi.number(),
   peliculadId: Joi.number()
})
