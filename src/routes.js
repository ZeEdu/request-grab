const express = require("express");

const routes = express.Router();
const RequestController = require("./app/controller/RequestController");

routes.get("/", RequestController.index);

routes.post("/", RequestController.store);

module.exports = routes;