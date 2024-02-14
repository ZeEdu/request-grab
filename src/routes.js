const express = require("express");

const routes = express.Router();
const RequestController = require("./app/controller/RequestController");

routes.get("/request", RequestController.index);

routes.post("/request", RequestController.store);

module.exports = routes;