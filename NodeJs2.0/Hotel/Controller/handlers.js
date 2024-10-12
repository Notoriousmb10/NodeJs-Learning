const { Order, User } = require("../Model/schema");
const bcrypt = require("bcrypt");
const { generateJWTToken } = require("../Jwt/jwt");

const signUp = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please fill all the fields");
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send("Username already exists");
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const credentials = {
      username,
      password: hashedPassword,
      email,
    };

    const savedUser = await User.create(credentials);
    await savedUser.save();
    const payload = {
      username: savedUser.username,
    };
    const token = generateJWTToken(payload);

    res.status(201).send({ user: savedUser, token });
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
};

const logIn = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Please fill all the fields");
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).send("Incorrect password");
    }

    const payload = { username: user.username };
    const token = generateJWTToken(payload);

    res.status(200).send({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).send("Error: " + error.message);
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

const usersInfo = async (req, res) => {
  try {
    const usersinfo = await User.find().lean();
    res.send(usersinfo);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
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

module.exports = { chickenMenu, order, signUp, logIn, usersInfo };