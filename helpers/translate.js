const { Translate } = require('@google-cloud/translate').v2
const {
   PROJECT_ID: projectId,
   API_KEY_GOOGLE: key
} = require('../config')

module.exports = async data => {
   const translate = new Translate({projectId, key})
   const targetLanguage = 'es'
   const campos = []
   const fields = []
   if (data.results.length) {
      const [row] = data.results
      for (const property in row) {
         const [translation] = await translate.translate(property, targetLanguage)
         const normalize = translation.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
         const propiedad = normalize.split(' ').join('_').toLowerCase()
         fields.push(property)
         campos.push(propiedad)
      }
   }
   const datos = data.results.map(record => {
      return fields.reduce((acc, field, idx) => {
         acc[campos[idx]] = record[field]
         return acc
      }, {})
   })

   return datos
}
