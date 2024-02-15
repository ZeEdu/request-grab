const mongoose = require('mongoose')
const username = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD

const url = `mongodb+srv://${username}:${password}@cluster0.3pphasg.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, { connectTimeoutMS: 2 * 60 * 1000 }).then(conn => {
  console.log('MONGODB CONNECTED')
  if (process.send) {
    process.send('ready')
  }
  return conn
}).catch(err => {
  console.error('MONGODB ERROR', err)
  throw err
})

module.exports = mongoose
