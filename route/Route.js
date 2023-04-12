const express = require("express");
const routes = express.Router();
const fs = require("fs");

const accountRoutes = require("./account.js");
routes.use(accountRoutes);

module.exports = routes;
