const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    image: String,
    password: String
    
})