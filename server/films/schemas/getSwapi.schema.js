const Joi = require('joi')

module.exports = Joi.object({
   page: Joi.number().empty(""),
   perPage: Joi.number().empty(""),
})
