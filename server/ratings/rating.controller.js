const { response } = require('../../helpers')
const Services = require('./services')

exports.createRating = async (req,res) => {
   const ans = await Services.createRating({ ...req.body })
   if(ans.error) {
      return response(res,ans.error.code,ans.error.message)
   }
   return response(res,200,ans)
}
