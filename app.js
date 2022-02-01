const serverless = require('serverless-http')
const express = require('express')
const app = express()
const { handleError } = require('./helpers')


app.use('/films',require('./server/films/film.router'))

app.use(handleError.routeError)
app.use(handleError.genericError)

module.exports.handler = serverless(app)
