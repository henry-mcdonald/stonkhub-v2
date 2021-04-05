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

//BODY PARSER
app.use(express.json())
const middleware = ((req,res, next ) =>{
    console.log(`Hello from middleware! 💩`)
    next()
})

//INDEX ROUTES
app.get('/', middleware, (req, res) => {
    res.json({ msg: "Hello from Middleware"})
})

//CONTROLLERS
app.use('/api-v1/users', usersController)

app.listen(PORT, () =>{
    rowdyResults.print()
    console.log(`server is running on port ${PORT}`)
})