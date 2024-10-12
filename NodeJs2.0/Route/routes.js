const express = require("express");
const { jwtAuthMiddleware } = require("../Jwt/jwt");
const Router = express.Router();
const {
  chickenMenu,
  order,
  signUp,
  logIn,
  usersInfo,
} = require("../Controller/handlers");

Router.get("/chicken", jwtAuthMiddleware, chickenMenu);
Router.get("/usersInfo", jwtAuthMiddleware, usersInfo);
Router.post("/order", jwtAuthMiddleware, order);
Router.post("/signUp", signUp);
Router.post("/login", logIn);
module.exports = Router;
