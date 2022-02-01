require('isomorphic-fetch')
const serverless = require('serverless-http')
const app = require('express')()
const { handleError } = require('./middlewares')


app.use('/films',require('./server/films/film.router'))

app.use(handleError.routeError)
app.use(handleError.genericError)

module.exports.handler = serverless(app)
