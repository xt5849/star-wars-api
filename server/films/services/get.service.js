const { fetchResource } = require('../../../helpers')
const { Translate } = require('@google-cloud/translate').v2

module.exports = async ({
   page,
   perPage
}) => {
   try {
      const response = await fetchResource('films')
      if(response.error) {
         return response
      }
      const translate = new Translate()
      const firstIndex = perPage*(page-1)
      const topIndex = perPage*page
      const total = response.results.length
      const pages = Math.ceil(total/perPage)
      const data = response.results.slice(firstIndex,topIndex)
      let target = 'es'
      let [translations] = await translate.translate(JSON.stringify(data),target)
      translations = Array.isArray(translations) ? translations : [translations];
      console.log('Translations:')
      translations.forEach((translation, i) => {
         console.log(`${text[i]} => (${target}) ${translation}`)
      })
      return {
         total,
         page,
         perPage,
         pages,
         data
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
