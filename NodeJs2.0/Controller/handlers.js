const { Order, User } = require("../Model/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateJWTToken } = require("../Jwt/jwt");

const signUp = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const salt = await bcrypt.genSalt(12);

    const hashedPassword = await bcrypt.hash(password, salt);
    const credentials = {
      username,
      password: hashedPassword,
      email,
    };
    if (username === "" || password === "" || email === "") {
      res.status(400).send("Please fill all the fields");
    } else {
      const ExistingUser = await User.findOne({
        username: username,
      });
      if (ExistingUser) {
        res.status(400).send("Username already exists");
      } else {
        const savedUser = await User.create(credentials);
        await savedUser.save();
        const token = await generateJWTToken(credentials);
        res.status(201).send(savedUser);
      }
    }
  } catch (err) {
    res.status(403).send("Error: " + err);
  }
};

const order = async (req, res) => {
  const { item, quantity } = req.body;
  const orderdetail = {
    item,
    quantity,
  };
  const newOrder = new Order(orderdetail);
  try {
    const savedOrder = await newOrder.save();
    res.send(savedOrder);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const chickenMenu = (req, res) => {
  const chickenItems = {
    chicken: "chicken",
    "chicken nuggets": "chicken nuggets",
    "chicken soup": "chicken soup",
  };
  res.send(chickenItems);
};

module.exports = { chickenMenu, order, signUp };
