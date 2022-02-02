const { response } = require('../../helpers')
const Services = require('./services')

exports.getSwapi = async (req,res) => {
   const {
      page = 1,
      perPage = 10
   } = req.query
   const ans = await Services.getSwapi({ page, perPage })
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}

exports.getRatedFilm = async (req,res) => {
   const ans = await Services.getRatedFilm({
      ...req.query,
      peliculaId: req.params.id
   })
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}
