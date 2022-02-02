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
         return responseFilm
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
