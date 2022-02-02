const { URL_SWAPI } = require('../config')

const setURL = uri => (resource,format="json") => {
   const url = uri + `${resource}?format=${format}`
   return fetch(url)
      .then(response => response.json())
      .catch(error => {
         return {
            error: {
               code: error.statusCode || 500,
               message: error.message
            }
         }
      })
}

module.exports = setURL(URL_SWAPI)
