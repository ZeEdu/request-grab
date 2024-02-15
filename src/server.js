require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const mongooseConnection = require('./database/service')

const port = process.env.PORT || 8080
class App {
  constructor () {
    this.express = express()
    mongooseConnection.then(() => {
      console.log('MONGODB CONNECTED')
      this.express.use(cors())
      this.express.use(morgan('dev'))

      this.middlewares()
      this.routes()
      this.express.listen(port, () =>
        console.log(`Sua API REST está funcionando na porta ${port}`)
      )
    }).catch(err => {
      console.error('MONGODB ERROR', err)
      throw err
    })
  }

  middlewares () {
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}
module.exports = new App().express
