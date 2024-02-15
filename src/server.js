require('dotenv').config()

require('./database/service')

const express = require("express")
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080
class App {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.express.listen(port, () =>
      console.log(`Sua API REST está funcionando na porta ${port}`)
    );
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;