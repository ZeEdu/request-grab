const mongoose = require('mongoose')
const username = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD

const url = `mongodb://${username}:${password}@cluster0.3pphasg.mongodb.net/?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, { connectTimeoutMS: 2 * 60 * 1000 })
