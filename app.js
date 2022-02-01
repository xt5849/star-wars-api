const serverless = require('serverless-http')
const express = require('express')
const app = express()

const FilmRouter = require('./server/films/film.router')

app.use('/films',FilmRouter)

module.exports.handler = serverless(app)
