require('dotenv').config()
const port = process.env.PORT || 8080

const server = require('./server')
server.listen(port)
