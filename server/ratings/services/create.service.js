const getConnection = require('../../../database')
const { fetchResource } = require('../../../helpers')
const { EntityNames } = require('../../../entities')

module.exports = async (object  = {
   puntaje,
   comentarios,
   personajeId,
   peliculaId
}) => {
   try {
      const connection = await getConnection()
      const RatingRepository = connection.getRepository(
         EntityNames.RatingEntity
      )
      const both = !object.personajeId && !object.peliculaId
      const none = object.personajeId && object.peliculaId
      if(both || none) {
         return {
            error: {
               code: 400,
               message: 'Solo puede emitir calificación sobre una película o personaje a la vez.'
            }
         }
      }
      if(object.peliculaId) {
         const { peliculaId } = object
         const responseFilm = await fetchResource(`/films/${peliculaId}`)

         if(responseFilm.error) {
            return responseFilm
         }

         if(responseFilm.detail == "Not found") {
            return {
               error: {
                  code: 404,
                  message: 'La película que especificó no existe.'
               }
            }
         }
         const rating = await RatingRepository.save({...object})
         return {
            ...rating,
            pelicula: responseFilm.title,
            director: responseFilm.director
         }
      }
      if(object.personajeId) {
         const { personajeId } = object
         const responsePersonaje = await fetchResource(`/people/${personajeId}`)

         if(responsePersonaje.error) {
            return responsePersonaje
         }

         if(responsePersonaje.detail == "Not found") {
            return {
               error: {
                  code: 404,
                  message: 'El personaje que especificó no existe.'
               }
            }
         }
         const rating = await RatingRepository.save({...object})
         return {
            ...rating,
            personaje: responsePersonaje.name
         }
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
