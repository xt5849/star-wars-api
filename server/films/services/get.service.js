// require('isomorphic-fetch')
const { URL_SWAPI } = require('../../../config')

module.exports = _params => {
   console.log(URL_SWAPI)
   // return fetch('https://swapi.py4e.com/api/films?format=json')
   const url = URL_SWAPI + '/films?format=json'
   console.log(url)
   return fetch(url, {
      method: 'GET',
      // query: {
         // title: 'A New Hope'
      // }
   }).then(response => {
      return response.json()
   }).then(ans => {
      console.log(ans)
      return ans
   }).catch(error => {
      console.error(error.message, error.stack)
   })
}
