const express = require("express");
const Router = express.Router();
const { chickenMenu, order, signUp} = require("../Controller/handlers");
const passport = require('../LocalStrategy/passport')
Router.get('/chicken', chickenMenu);
Router.post('/order', order)
Router.post('/signUp', signUp)
module.exports = Router
