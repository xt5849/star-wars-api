require('isomorphic-fetch')
const serverless = require('serverless-http')
const app = require('express')()
const bodyParser = require('body-parser')

const { handleError } = require('./middlewares')

app.use(bodyParser.json())

app.use('/films',require('./server/films/film.router'))
app.use('/ratings',require('./server/ratings/rating.router'))

app.use(handleError.routeError)
app.use(handleError.genericError)

module.exports.handler = serverless(app)
