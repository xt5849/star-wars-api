const getConnection = require('../../../database')
const { fetchResource } = require('../../../helpers')
const { EntityNames } = require('../../../entities')

const {
   Between,
   MoreThanOrEqual,
   LessThanOrEqual,
   Not,
   IsNull
} = require('typeorm')

module.exports = async ({
   number,
   order,
   fechaInicio,
   fechaFinal
}) => {
   try {
      const connection = await getConnection()
      const RatingRepository = connection.getRepository(
         EntityNames.RatingEntity
      )

      const films = await fetchResource('/films')
      if(films.error) {
         return films
      }

      const whereLogic = { peliculaId: Not(IsNull()) }

      if(fechaInicio && fechaFinal) {
         whereLogic.creado = Between(fechaInicio,fechaFinal)
      } else if(fechaInicio && !fechaFinal) {
         whereLogic.creado = MoreThanOrEqual(fechaInicio)
      } else if(!fechaInicio && fechaFinal) {
         whereLogic.creado = LessThanOrEqual(fechaFinal)
      }

      const ratings = await RatingRepository.find({
         where: whereLogic
      })

      if(!ratings.length) {
         return { message: 'No hay calificaciones por el momento' }
      }

      const sumRatings = ratings.reduce((acc,rating) => {
         const peliculaId = String(rating.peliculaId)
         if(!acc[peliculaId]) {
            acc[peliculaId] = {
               sum: rating.puntaje,
               count: 1
            }
         } else {
            acc[peliculaId].sum += rating.puntaje
            acc[peliculaId].count++
         }
         return acc
      },{})

      const averagesFilms = []

      for(const filmId in sumRatings) {
         const film = films.results.find(film => {
            const id = film.url.split('/').slice(-2).shift()
            console.log(id,filmId)
            console.log(id==filmId)
            return id == filmId
         })
         const { sum, count } = sumRatings[filmId]
         averagesFilms.push({
            pelicula: film.title,
            director: film.director,
            promedio: sum / count
         })
      }

      const sortedFilms = averagesFilms.sort((first,second) => {
         if(first.promedio < second.promedio) {
            return order == 'ASC' ? -1 : 1
         } else {
            return order == 'ASC' ? 1 : -1
         }
      })

      return sortedFilms.slice(0,number)
   } catch(error) {
      console.error(error.message, error.stack)
      return {
         error: {
            code: 500,
            message: error.message
         }
      }
   }
}
