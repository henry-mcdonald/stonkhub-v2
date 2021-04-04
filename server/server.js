//PACKAGES
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const usersController = require('./controllers/usersController')

//PORT ACTIVATION
const app = express()
const PORT = process.env.PORT || 3001
const rowdyResults = rowdy.begin(app)

//MIDDLEWARE
app.use(morgan('tiny'))
app.use(cors())

//CONTROLLERS
app.use('/api-v1/users', usersController)