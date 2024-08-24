const express = require("express");

const router = express.Router();
const { getAllUsers, createUser, findUser } = require("../controllers/user");

router.route("/users").get(getAllUsers).post(createUser);

router.route("/users/:id").get(findUser);

module.exports = router;
