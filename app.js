const serverless = require('serverless-http')
const express = require('express')
const app = express()
const { handleRouteError } = require('./helpers')


app.use('/films',require('./server/films/film.router'))

app.use(handleRouteError)

module.exports.handler = serverless(app)
