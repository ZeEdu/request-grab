const express = require("express");

const routes = express.Router();
const HamburgerController = require("./app/controller/RequestController");

routes.get("/request", HamburgerController.index);

routes.post("/request", HamburgerController.store);

module.exports = routes;