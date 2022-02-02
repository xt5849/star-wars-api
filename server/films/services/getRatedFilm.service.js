const getConnection = require('../../../database')
const { fetchResource } = require('../../../helpers')
const { EntityNames } = require('../../../entities')
const {
   Between,
   MoreThanOrEqual,
   LessThanOrEqual
} = require('typeorm')

module.exports = async ({
   peliculaId,
   fechaInicio,
   fechaFinal
}) => {
   try {
      const connection = await getConnection()
      const RatingRepository = connection.getRepository(
         EntityNames.RatingEntity
      )
      const whereLogic = { peliculaId }

      const responseFilm = await fetchResource(`/films/${peliculaId}`)

      if (responseFilm.error) {
         return response
      }

      if (responseFilm.detail == "Not found") {
         return {
            error: {
               code: 404,
               message: 'La película que especificó no existe.'
            }
         }
      }

      if(fechaInicio && fechaFinal) {
         whereLogic.creado = Between(fechaInicio,fechaFinal)
      } else if(fechaInicio && !fechaFinal) {
         whereLogic.creado = MoreThanOrEqual(fechaInicio)
      } else if(!fechaInicio && fechaFinal) {
         whereLogic.creado = LessThanOrEqual(fechaFinal)
      }

      console.log(whereLogic)

      const ratings = await RatingRepository.find({
         where: whereLogic
      })

      const numberOfRatings = ratings.length

      if(!numberOfRatings) {
         return {
            promedio: 0,
            numeroCalificaciones: 0,
            pelicula: responseFilm.title,
            director: responseFilm.director
         }
      }

      const sum = ratings.reduce((acc,rating) => acc += rating.puntaje,0)

      const promedio = sum / numberOfRatings

      return {
         promedio,
         numeroCalificaciones: numberOfRatings,
         pelicula: responseFilm.title,
         director: responseFilm.director
      }
   } catch(error) {
      console.error(error.message,error.stack)
      return {
         error: {
            code: 500,
            message: error.message
         }
      }
   }
}
