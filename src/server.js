require('dotenv').config()

const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')

class App {
  constructor() {
    this.express = express();

    this.database()
    this.middlewares();
    this.routes();
    this.express.listen(3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  database() {
    mongoose.connect(db.uri, { useNewUrlParser: true });
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