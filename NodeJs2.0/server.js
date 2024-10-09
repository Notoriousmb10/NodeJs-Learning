const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/chicken", (req, res) => {
  const chickenItems = {
    chicken: "chicken",
    "chicken nuggets": "chicken nuggets",
    "chicken soup": "chicken soup",
  };
  res.send(chickenItems);
});

app.listen(PORT, () => {
  console.log("Server Started At Port  3001");
});
