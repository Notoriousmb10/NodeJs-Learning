const { Order } = require("../Model/schema");
const chickenMenu = (req, res) => {
  const chickenItems = {
    chicken: "chicken",
    "chicken nuggets": "chicken nuggets",
    "chicken soup": "chicken soup",
  };
  res.send(chickenItems);
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

module.exports = { chickenMenu, order };
