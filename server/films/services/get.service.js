const {
   fetchResource,
   translateFields
} = require('../../../helpers')

module.exports = async ({
   page,
   perPage
}) => {
   try {
      const response = await fetchResource('films')
      if(response.error) {
         return response
      }
      const firstIndex = perPage*(page-1)
      const topIndex = perPage*page
      const data = await translateFields(response)
      const total = response.results.length
      const pages = Math.ceil(total/perPage)
      return {
         total,
         page,
         perPage,
         pages,
         data: data.slice(firstIndex,topIndex)
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
