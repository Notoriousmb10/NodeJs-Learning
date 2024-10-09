const express = require("express");
const Router = express.Router();
const { chickenMenu, order } = require("../Controller/handlers");


Router.get('/chicken', chickenMenu);
Router.post('/order', order)
module.exports = Router